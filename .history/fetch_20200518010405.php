
<?php
//fetch.php
$connect = mysqli_connect("localhost", "root", "root", "db_carforsale");
$request = mysqli_real_escape_string($connect, $_POST["query"]);
$query = "
 SELECT * FROM tb_annonce WHERE marque LIKE '%".$request."%'
";

$result = mysqli_query($connect, $query);

$data = array();

if(mysqli_num_rows($result) > 0)
{
 while($row = mysqli_fetch_assoc($result))
 {
  $data[] = $row["marque"];
 }
 echo json_encode($data);
}

?>