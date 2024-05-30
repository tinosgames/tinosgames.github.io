<?php
if (isset($_GET['query'])) {
    $query = urlencode($_GET['query']);
    $url = "https://google.com/"; // Use Google for search

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
} else {
    echo "No query specified.";
}
?>
