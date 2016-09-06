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

var myViewModel = {
    personName: 'Matthew Capewell',
};

ko.applyBindings(myViewModel);