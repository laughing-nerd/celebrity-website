import React from "react";
// import Clipboardbtn from "../templates/clipboardbtn";
import Inputbar from "../templates/inputbar";
// import Image from "next/image";
// import ClipboardJS from "clipboard";

export default function Checkoutmodal() {
	// new ClipboardJS(".btn");
	return (
		<div className="container-fluid">
			<h4>
				Transfer the stipulated worth of btc to the following address
			</h4>
			<small className="text-muted">
				For security and anonymity, no direct transfer from the site.
			</small>
			<br />
			<br />
			<Inputbar/>
			<br />
			<br />
			<span>
				<h5>Follow these steps for a successful transaction</h5>
			</span>
			<ol>
				<li>Copy the adddress above</li>
				<li>
					make a transfer of crypto worth the amount in USD for the
					membership you wish to acquire <br />
					<small className="text-muted">
						*eg; you want the initiate membership(20USD), transfer
						20USD worth of crypto.
					</small>
				</li>
				<li>
					Get your proof of funds ready (can be a screenshot from your
					address, an email, etc.)
				</li>
				<li>
					Transfer proof of funds to this telegram provided. Click the
					button below that says telegram.
				</li>
			</ol>
		</div>
	);
}
