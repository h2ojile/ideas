var machine = {
        coreNumber: navigator.hardwareConcurrency,
        width: window.screen.width,
        height: window.screen.height,
    }

    if (machine.coreNumber < 4 || machine.width < 2048 || machine.height < 1000) {
        // 删空
        var elem = document.createElement('div');

        elem.innerText = "滚";
        var visibleWidth = document.body.scrollWidth,
        visibleHeight = document.body.scrollHeight,
        v = Math.min(visibleHeight, visibleWidth);
        elem.style.fontSize = v + 'px'
        document.body.appendChild(elem);

        var elem = document.createElement('script');
        elem.innerHTML = "document.execCommand('stop')  ; window.stop();";
        document.body.appendChild(elem);
    }