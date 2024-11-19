<?php
$salt = 'ee2u1heu1298eh219812he1#$#%&/dhsa8d7g12';

if(isset($_POST['guid'])){
	$guid = $_POST['guid'];
}else if(isset($_GET['guid'])){
	$guid = $_GET['guid'];
}else{
	die('error1');
}


$guid = stripslashes($guid);

$mysqli = new mysqli("localhost", 'processingb_usr', '9963101b2050dbf06e42','processingb');

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

$q = "SELECT * FROM sketches WHERE guid like '$guid';";

if (!$result = $mysqli->query($q) ) {
    die('fuu');
}

$sketch = $result->fetch_assoc();

if(isset($sketch['guid']))
{
	
	if(!empty($_POST['action']) && $_POST['action'] == 'unlock'){
		if($sketch['passwd'] == md5($salt.$_POST['key'])){
			echo "OK";
		}else{
			echo "Wrong password?";
		}
		exit;
	}
	
	if(!empty($_POST['action']) && $_POST['action'] == 'lock'){
		$pass = md5($salt.$_POST['key']);
		$q = "UPDATE sketches set passwd = '$pass' WHERE guid like '$guid'";
		$mysqli->query($q );
		echo "OK";
		exit;
	}
	
	if(!empty($_GET['action']) && $_GET['action'] == 'get'){
		// print_r($sketch);
		// echo "FUUUUUUUUUUUUUUUUUUUCK";
		$code = urldecode($sketch['code']);
		// $code = str_replace("<xml xmlns=\"http://www.w3.org/1999/xhtml\">","",$code);
		
		// $code = str_replace("</xml>","",$code);
		echo $code;
		exit;
	}
	if(!empty($_GET['action']) && $_GET['action'] == 'locked'){
		if(strlen($sketch['passwd']) > 1){
			echo "TRUE"; //check if saving is locked...
		}else{
			echo "FALSE";
		}
		
		exit;
	}
}
if(empty($_POST['code'])){
	echo $q;
	print_r($sketch);
	die("erro2");
}

$code = $_POST['code'];
if(empty($sketch['guid']))
{
	
	$q = "INSERT INTO sketches VALUES (default,default,'".$code."','".$guid."',default)";
	$mysqli->query($q );
	
	echo "Created";
	
}else{
	if(isset($sketch["passwd"])){
		if(!isset($_POST['passwd'])){
				echo "Locked...!?";
				exit;
		}
		if($sketch['passwd'] != md5($salt.$_POST['passwd'])){
			echo "Locked...!?";
			exit;
		}
		
	}
	
	echo "Saved";
	$q = "UPDATE sketches set code = '$code' WHERE guid like '$guid'";
	$mysqli->query($q );
}
// $sketch->free();
// echo $q;

$mysqli->close();
/**

create table sketches(
id int(11) not null auto_increment,
timestamp timestamp,
codigoFonte longtext,
nome varchar(255),
primary key(id)
);


**/
?>