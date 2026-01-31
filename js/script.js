// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Javascript to display a welcome message to the user
    welcomeMessage();

    //function to display a welcome message to the user
    function welcomeMessage() {
        //prompt user for their name
        let userRespons = prompt("Welcome to Last Knight Software! Please enter your name:");

        //Handle case when user clicks "Cancel" or enters an empty name
        if(userRespons === null || userRespons.trim() === "") {
            userRespons = "Guest";
        }

        //display welcome message with user's name
        const welcomeElement = document.getElementById("WelcomeSpeech");
        if (welcomeElement) {
            welcomeElement.innerText = "Hi " + userRespons + ", Welcome To Website";
        }
    }

    // Function to update current time
    function updateCurrentTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        return now.toLocaleDateString('id-ID', options);
    }

    // Handle form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value;
            const tanggalLahir = document.getElementById('tanggalLahir').value;
            const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked');
            const pesan = document.querySelector('textarea[name="pesan"]').value;
            
            // Validation
            if (!nama || !tanggalLahir || !jenisKelamin || !pesan) {
                alert('Mohon isi semua field!');
                return;
            }
            
            // Update preview with form data
            const currentTimeElement = document.getElementById('current-time');
            if (currentTimeElement) {
                currentTimeElement.textContent = ' ' + updateCurrentTime();
            }

            const previewNama = document.getElementById('preview-nama');
            if (previewNama) {
                previewNama.textContent = nama;
            }

            const previewTanggal = document.getElementById('preview-tanggal-lahir');
            if (previewTanggal && tanggalLahir) {
                const date = new Date(tanggalLahir);
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                previewTanggal.textContent = date.toLocaleDateString('id-ID', options);
            }

            const previewGender = document.getElementById('preview-jenis-kelamin');
            if (previewGender) {
                previewGender.textContent = jenisKelamin.value;
            }

            const previewPesan = document.getElementById('preview-pesan');
            if (previewPesan) {
                previewPesan.textContent = pesan;
            }
        });
    }

});