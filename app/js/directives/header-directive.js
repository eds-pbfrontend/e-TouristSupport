app.directive("headerDirective", function() {
    return {
        template : "<header>\n" +
            "    <nav id=\"busca\">\n" +
            "        <form class=\"form-inline my-2 mx-auto\" role=\"form\">\n" +
            "            <input class=\"form-control mx-auto\" id=\"formpesquisanav\" type=\"search\" placeholder=\"Buscar por nome\" aria-label=\"Search\" tabindex=\"1\">\n" +
            "        </form>\n" +
            "    </nav>\n" +
            "    <nav id=\"menu\" class=\"navbar navbar-expand-lg navbar-light bg-light mb-3\">\n" +
            "        <a class=\"navbar-brand\" href=\"#\" tabindex=\"-1\">Logo</a>\n" +
            "        <button class=\"navbar-toggler\" role=\"button\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" tabindex=\"2\">\n" +
            "            <span class=\"navbar-toggler-icon\"></span>\n" +
            "        </button>\n" +
            "        <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\" tabindex=\"-1\">\n" +
            "            <ul class=\"navbar-nav mr-auto\">\n" +
            "                <li class=\"nav-item active ml-3\">\n" +
            "                    <a class=\"nav-link\" href=\"#\" tabindex=\"3\">Home <span class=\"sr-only\">(current)</span></a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item mr-4 ml-3\">\n" +
            "                    <a class=\"nav-link\" href=\"#\" tabindex=\"4\">Empresa</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item mr-4 ml-3\">\n" +
            "                    <a class=\"nav-link\" href=\"#\" tabindex=\"5\">Hospitais</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item mr-4 ml-3\">\n" +
            "                    <a class=\"nav-link\" href=\"#\" tabindex=\"6\">Pontos Turísticos</a>\n" +
            "                </li>\n" +
            "                <li class=\"nav-item dropdown mr-4 ml-3\">\n" +
            "                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" tabindex=\"7\">\n" +
            "                        Eventos\n" +
            "                    </a>\n" +
            "                    <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n" +
            "                        <!--<a class=\"dropdown-item\" href=\"#\">Futebol</a>-->\n" +
            "                        <li class=\"dropdown-item\"><a href=\"#\">Musical</a></li>\n" +
            "                        <li class=\"nav-item dropdown-submenu\">\n" +
            "                            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">Rio 2019</a>\n" +
            "                            <ul class=\"dropdown-menu\">\n" +
            "                                <li class=\"dropdown-item\"><a href=\"#\">Futebol</a></li>\n" +
            "                                <!--<a class=\"dropdown-item\" href=\"#\">Musical</a>-->\n" +
            "                            </ul>\n" +
            "                        </li>\n" +
            "                    </ul>\n" +
            "                </li>\n" +
            "            </ul>\n" +
            "            <button class=\"btn btn-dark mr-2\" type=\"submit\">Login</button>\n" +
            "            <button class=\"btn btn-dark ml-2\" type=\"submit\">Registro</button>\n" +
            "        </div>\n" +
            "    </nav>\n" +
            "</header>"
    };
});