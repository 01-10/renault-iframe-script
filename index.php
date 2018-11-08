<?php

$file = key($_GET);

if (
    $file
    && preg_match('/^[a-z]+$/', $file)
    && file_exists("./{$file}.js")
) {
    header("Location: ./{$file}.js?" . filemtime("./{$file}.js"));
} else {
    header("HTTP/1.0 404 Not Found");
}
