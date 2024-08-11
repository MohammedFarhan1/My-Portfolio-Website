window.onload = function() {
    const notification = document.getElementById('notification');
    notification.style.opacity = '1';

    setTimeout(() => {
        notification.style.opacity = '0';
    }, 1000); // 3000 milliseconds = 3 seconds
};
