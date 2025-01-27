<?php
// Tarkistetaan, että lomake lähetti tiedot
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Haetaan lomakkeen tiedot
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Määritetään vastaanottajan sähköpostiosoite
    $to = "jyri.2.nieminen@tuno.fi";
    $subject = "Yhteydenottopyyntö: $name";

    // Sähköpostin sisältö
    $body = "Saat viestin verkkosivultasi:\n\n";
    $body .= "Nimi: $name\n";
    $body .= "Sähköposti: $email\n\n";
    $body .= "Viesti:\n$message\n";

    // Määritetään lähettäjän tiedot
    $headers = "From: $email";

    // Lähetetään sähköposti
    if (mail($to, $subject, $body, $headers)) {
        echo "Viesti lähetettiin onnistuneesti.";
    } else {
        echo "Viestin lähettäminen epäonnistui.";
    }
} else {
    echo "Virhe: Lomaketta ei lähetetty oikein.";
}
?>
