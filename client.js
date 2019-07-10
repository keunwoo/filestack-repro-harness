const client = filestack.init(API_KEY);

const pickButton = document.getElementById('pick');
pickButton.addEventListener('click', () => {
    const picker = client.picker({
        fromSources: [
            'local_file_system',
            'url',
            'imagesearch',
            'video',
            'webcam',
            'googledrive',
            'dropbox',
            'instagram',
            'picasa',
            'gmail',
            'facebook',
            'box',
            'onedrive',
            'onedriveforbusiness',
        ],
        maxFiles: 5,
    });
    picker.open();
});

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', () => {
    client.logout();
});
