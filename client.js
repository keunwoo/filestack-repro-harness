const client = filestack.init(API_KEY);

const pickButton = document.getElementById('pick');
pickButton.addEventListener('click', () => {
    client.pick({
        maxFiles: 1,
        uploadInBackground: false,
        onFileSelected: (file) => {
            console.log(file);
        },
    });
});

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    client.logout();
});
