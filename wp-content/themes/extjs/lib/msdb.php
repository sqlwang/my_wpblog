<?php
class msdb{
	public function connect(){
		$serverName ="127.0.0.1";
		 $usr="sa";
		 $pwd="sa$$12345678";
		 $db="Hexdata";
		
		$connectionInfo = array("UID" => $usr, "PWD" => $pwd, "Database" => $db);
		
		$conn = sqlsrv_connect($serverName, $connectionInfo);
		if (!$conn) {
			echo "connect db error";
			 die( print_r( sqlsrv_errors(), true));
			
		}else {
			//echo "connect db right";
		}
		return $conn;
	}
	
	 public function close($conn)
	{
		sqlsrv_close($conn);
	}
}

?>