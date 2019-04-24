const client = filestack.init(API_KEY);

const pickButton = document.getElementById('pick');
pickButton.addEventListener('click', () => {
    client.pick({
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
            'flickr',
            'evernote',
        ],
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
