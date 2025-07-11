document.addEventListener('DOMContentLoaded', function() {
    const starContainer = document.getElementById('twinkling-stars');
    const dustContainer = document.getElementById('fairy-dust-container');
    const heartsContainer = document.getElementById('hearts-container');

    const specialButton = document.getElementById('special-button');
    const secretMessage = document.getElementById('secret-message');
    const lullaby = document.getElementById('lullaby');

    // --- TẠO CÁC NGÔI SAO VÀ HẠT BỤI TIÊN ---
    function createElements(container, className, count, sizeMin, sizeMax) {
        for (let i = 0; i < count; i++) {
            let el = document.createElement('div');
            el.className = className;
            let size = Math.random() * (sizeMax - sizeMin) + sizeMin;
            let delay = Math.random() * 10;
            let duration = Math.random() * 10 + 10;

            el.style.width = size + 'px';
            el.style.height = size + 'px';
            
            if (className === 'star') {
                el.style.left = Math.random() * 100 + 'vw';
                el.style.top = Math.random() * 100 + 'vh';
                el.style.animationDelay = delay + 's';
                el.style.animationDuration = (Math.random() * 5 + 3) + 's';
            } else if (className === 'fairy-dust') {
                el.style.left = Math.random() * 100 + 'vw';
                el.style.animationDelay = delay + 's';
                el.style.animationDuration = duration + 's';
            }
            container.appendChild(el);
        }
    }

    // Tạo 150 ngôi sao lấp lánh
    createElements(starContainer, 'star', 150, 1, 3);
    // Tạo 100 hạt bụi tiên
    createElements(dustContainer, 'fairy-dust', 100, 1, 4);


    // --- HÀM TẠO CƠN MƯA TRÁI TIM ---
    function createFallingHearts() {
        const heartCount = 30; // Số lượng trái tim
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '♥'; // Ký tự trái tim
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // Tốc độ rơi 4-7s
            heart.style.animationDelay = Math.random() * 3 + 's'; // Xuất hiện ngẫu nhiên trong 3s
            heart.style.color = `hsl(${Math.random() * 360}, 100%, 80%)`; // Màu sắc ngẫu nhiên
            heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem'; // Kích thước ngẫu nhiên
            heartsContainer.appendChild(heart);

            // Xóa trái tim sau khi nó rơi xong để tiết kiệm bộ nhớ
            setTimeout(() => {
                heart.remove();
            }, 7000); // Thời gian này phải lớn hơn animation-duration + animation-delay tối đa
        }
    }

    // --- XỬ LÝ SỰ KIỆN BẤM NÚT ---
    let buttonClicked = false;
    specialButton.addEventListener('click', function() {
        if (buttonClicked) return; // Chỉ cho phép bấm 1 lần
        buttonClicked = true;

        // Ẩn nút bấm với hiệu ứng mờ dần
        specialButton.style.transition = 'opacity 0.5s';
        specialButton.style.opacity = '0';
        setTimeout(() => specialButton.style.display = 'none', 500);

        // Hiện lời nhắn bí mật
        secretMessage.classList.remove('hidden');

        // Bắt đầu phép màu
        lullaby.play();
        createFallingHearts();
    });
});