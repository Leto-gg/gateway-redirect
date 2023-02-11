
const express = require('express');
const app = express();

app.get('/:hash', (req, res) => {
	const hash = req.params.hash;
	const redirectUrl = `https://${hash}.ipfs.w3s.link`;
	res.redirect(redirectUrl);
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
<html>
	<head>
	<title>CID Router < /title>
		< /head>
		< body >
		<h1>CID Router < /h1>
			< p > Enter a CID: </p>
				< input id = "cidInput" type = "text" />
					<button id="submitButton" > Go < /button>

						<script>
const submitButton = document.getElementById('submitButton');
const cidInput = document.getElementById('cidInput');

submitButton.addEventListener('click', () => {
	const cid = cidInput.value;
	const url = `https://${cid}.ipfs.w3s.link`;
	window.location.href = url;
});
</script>
	< /body>
	< /html>
>>>>>>> 0bf90e73251d5f02c925c574a37a9f2282bc43ba
