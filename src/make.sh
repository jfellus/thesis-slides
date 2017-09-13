#!/bin/bash

OUT=echo $1 | cut -d_ -f1
OUT=$2/$OUT.html

cat >$OUT <<EOL
<html>
<head>
<script src="../main.js"></script>
<link rel="stylsheet" href="../main.css">
</head>
<body>
EOL

cat $1 | grep -v "<[?]" >> $OUT

cat >>$OUT <<EOL
</body>
</html>
EOL
