<script>
        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();

            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;

            if (username === "Dodo" && password === "gumiadmin") {
                // Sikeres bejelentkezés esetén átirányítás a Google-ra
                window.location.href = "https://www.google.com";
            } else {
                alert("Rossz felhasználónév vagy jelszó");
            }
        });
    </script>