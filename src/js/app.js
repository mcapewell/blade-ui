document.getElementsByClassName('coreui-splashscreen')[0].onclick = function() {
    document.body.className += ' loaded';
}

document.getElementById('mySidenavButton').onclick = function() {
    if (document.getElementById('mySidenav').hasClass('coreui-sidebar-is-collapsed'))
        document.getElementById('mySidenav').removeClass('coreui-sidebar-is-collapsed');
    else
        document.getElementById('mySidenav').addClass('coreui-sidebar-is-collapsed');
}

Node.prototype.hasClass = function (className) {
    if (this.classList) {
        return this.classList.contains(className);
    } else {
        return (-1 < this.className.indexOf(className));
    }
};

Node.prototype.addClass = function (className) {
    if (this.classList) {
        this.classList.add(className);
    } else if (!this.hasClass(className)) {
        var classes = this.className.split(" ");
        classes.push(className);
        this.className = classes.join(" ");
    }
    return this;
};

Node.prototype.removeClass = function (className) {
    if (this.classList) {
        this.classList.remove(className);
    } else {
        var classes = this.className.split(" ");
        classes.splice(classes.indexOf(className), 1);
        this.className = classes.join(" ");
    }
    return this;
};

ko.bindingHandlers['dynamicHtml'] = {
    'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        // setHtml will unwrap the value if needed
        ko.utils.setHtml(element, valueAccessor());
        ko.applyBindingsToDescendants(bindingContext, element);
    }
};

function AppViewModel() {
    var self = this;
    
    self.userName = 'Matthew Capewell';

    self.blades = ko.observableArray();
    
    self.addBlade = function(title, subTitle, bladeSize, url, commands) {
        self.blades.push({
            title: ko.observable(title),
            subTitle: subTitle,
            bladeSize: bladeSize,
            content: ko.observable(),
            commands: commands
        });

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                self.blades()[self.blades().length - 1].content(this.responseText);
            }
        };

        xhttp.open("GET", url + ((/\?/).test(url) ? "&" : "?") + (new Date()).getTime(), true);
        xhttp.send();
    };
    
    self.removeBlade = function() {
        self.blades.remove(this);
    }

    self.fullscreen = function() {
        //TODO: this should be done differently so it works on a per blade basis...
        var divObj = document.getElementById('dashboard');

        if (divObj.requestFullscreen) {
            divObj.requestFullscreen();
        }
        else if (divObj.msRequestFullscreen) {
            divObj.msRequestFullscreen();
        }
        else if (divObj.mozRequestFullScreen) {
            divObj.mozRequestFullScreen();
        }
        else if (divObj.webkitRequestFullscreen) {
            divObj.webkitRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported');
        }
    }
}

ko.applyBindings(new AppViewModel());