<?php  

	add_action( 'phpmailer_init', function( $phpmailer ) {
	    if ( !is_object( $phpmailer ) )
	    $phpmailer = (object) $phpmailer;
	    $phpmailer->Mailer     = 'smtp';
	    $phpmailer->Host       = 'smtp.gmail.com';
	    $phpmailer->SMTPAuth   = 1;
	    $phpmailer->Port       = 587;
	    $phpmailer->Username   = 'trunggian06.web3b@gmail.com';
	    $phpmailer->Password   = 'dikasolehngidckr';
	    $phpmailer->SMTPSecure = 'TLS';
	    $phpmailer->From       = 'trunggian06.web3b@gmail.com';
		$phpmailer->FromName   = 'Thiết kế web 3B - thietkeweb3b.com';
		
	});