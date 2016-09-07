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



function AppViewModel() {
    var self = this;
    
    self.userName = 'Matthew Capewell';

    self.blades = ko.observableArray();
    
    self.addBlade = function(title, subTitle, bladeSize) {
        self.blades.push({ title: ko.observable(title), subTitle: subTitle, bladeSize: bladeSize, content: ko.observable('<p>Loading...</p>') });

        //self.blades()[0].title('Testing...');
        self.blades()[0].content('<p>Core components:</p>' +
                                '<ul class="coreui-blade-list">' +
                                    '<li>' +
                                        '<a href="#"><i class="fa fa-search fa-fw"></i>Explore</a>' +
                                        '<i class="fa fa-star fa-lg favourite" title="Favourite"></i>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a href="#"><i class="fa fa-sitemap fa-fw"></i>Visualize</a>' +
                                        '<i class="fa fa-star fa-lg favourite" title="Favourite"></i>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a href="#"><i class="fa fa-cogs fa-fw"></i>Settings</a>' +
                                        '<i class="fa fa-star fa-lg favourite" title="Favourite"></i>' +
                                    '</li>' +
                                '</ul>' +
                                '<p>Other applications:</p>' +
                                '<ul class="coreui-blade-list">' +
                                    '<li>' +
                                        '<a href="#"><i class="fa fa-desktop fa-fw"></i>CENTUM</a>' +
                                        '<i class="fa fa-star-o fa-lg favourite" title="Favourite"></i>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a href="#"><i class="fa fa-area-chart fa-fw"></i>Exaquantum</a>' +
                                        '<i class="fa fa-star-o fa-lg favourite" title="Favourite"></i>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a href="#"><i class="fa fa-database fa-fw"></i>Exaquantum/AMD</a>' +
                                        '<i class="fa fa-star-o fa-lg favourite" title="Favourite"></i>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a href="#"><i class="fa fa-file-text fa-fw"></i>Exaquantum/ARA</a>' +
                                        '<i class="fa fa-star-o fa-lg favourite" title="Favourite"></i>' +
                                    '</li>' +
                                    '<li>' +
                                        '<a href="#"><i class="fa fa-bell fa-fw"></i>Exaquantum/SER</a>' +
                                        '<i class="fa fa-star-o fa-lg favourite" title="Favourite"></i>' +
                                    '</li>' +
                                '</ul>');
    };
    
    self.removeBlade = function() {
        self.blades.remove(this);
    }
}

ko.applyBindings(new AppViewModel());