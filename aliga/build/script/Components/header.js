define(["exports", "react"], function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _interopRequire(obj) { return obj && obj.__esModule ? obj["default"] : obj; }

  var _React = _interopRequire(_react);

  var header = _React.createClass({
    displayName: "header",

    render: function render() {
      console.log(this.props);
      return _React.createElement(
        "header",
        { className: "header " },
        _React.createElement(
          "nav",
          { className: " main-menu wrap container_12" },
          _React.createElement(
            "a",
            { className: "grid_2 rent main-menu__link ", href: "#" },
            "Rent"
          ),
          _React.createElement(
            "a",
            { className: "grid_2 sale main-menu__link", href: "#" },
            "Sale"
          ),
          _React.createElement(
            "a",
            { className: "grid_2 daily-rent main-menu__link", href: "#" },
            "Daily rent"
          ),
          _React.createElement(
            "a",
            { className: "grid_2 more-service main-menu__link", href: "#" },
            "more service"
          ),
          _React.createElement(
            "a",
            { className: "grid_2 forum main-menu__link", href: "#" },
            "Forum"
          ),
          _React.createElement(
            "a",
            { className: "grid_2 my-office main-menu__link", href: "#" },
            "My office"
          )
        ),
        _React.createElement("nav", { className: "search-menu container_12" })
      );
    }

  });

  /*
   <header class="header ">
   <nav class=" main-menu wrap container_12">
   <a class="grid_2 rent main-menu__link " href="#">������</a>
   <a class="grid_2 sale main-menu__link" href="#">������</a>
   <a class="grid_2 daily-rent main-menu__link" href="#">�������� ������</a>
   <a class="grid_2 more-service main-menu__link" href="#">��������� �������</a>
   <a class="grid_2 forum main-menu__link" href="#">�����</a>
   <a class="grid_2 my-office main-menu__link" href="#">̳� �������</a>
   </nav>
   <nav class="search-menu container_12">
  
   </nav>
   </header>
  
   <main class="container_12 wrap main">
  
  
   <aside class="grid_4">
   <div class="recommend block block--border-blue">
   <h1 class="block__h1 block--color-blue">������������</h1>
  
   <article>
   <img class="block__img" src="img/afisha-jazz-bezz-2014.png">
  
   <h2 class="block__h2"><a href="#">�IV ����������� �������� ��������� �Jazz Bez�</a></h2>
  
   <p>
   ������������� �Jazz Bez� �ᒺ���� ������� ����� ����, ������, ���������,
   �����-����������, г���, �����, ���������, ������, �����, �������, ��������, ������,
   ���������. ������������ � �������������� ������ ��������� � �����
   </p>
  
   <p>
   ������������� �Jazz Bez� �ᒺ���� ������� ����� ����, ������, ���������,
   �����-����������, г���, �����, ���������, ������, �����, �������, ��������, ������,
   ���������. ������������ � �������������� ������ ��������� � �����
   </p>
  
   <p>
   ������������� �Jazz Bez� �ᒺ���� ������� ����� ����, ������, ���������,
   �����-����������, г���, �����, ���������, ������, �����, �������, ��������, ������,
   ���������. ������������ � �������������� ������ ��������� � �����
   </p>
  
   <p>
   ������������� �Jazz Bez� �ᒺ���� ������� ����� ����, ������, ���������,
   �����-����������, г���, �����, ���������, ������, �����, �������, ��������, ������,
   ���������. ������������ � �������������� ������ ��������� � �����
   </p>
   </article>
   </div>
   </aside>
  
   <section class="grid_8 ">
   <main class="today block block--border-orange grid_6">
   <h1 class="block__h1 block--color-orange">��������</h1>
  
   <a class="see-more" href="#">����������� ���� ��䳿</a>
  
   <article class="block--article-surround">
   <img class="block__img block__img--poster" src="img/afisha-mykola-falafivka.jpg">
  
   <h2 class="block__h2 block--content-margin-left">
   <a href="#">������� ������ � �����������</a>
   </h2>
  
   <p class="block--content-margin-left">
   ������� ������ ����������� ����� �������� ������ ���, ��� ������, �� "� ����� �����
   ���������� ���" �� "� ���� ������ ���� - ��� �� ����� ��������", ��� �� �������
   ��������� ����, �� ���� ����� ���������� �� ������������ �����
   </p>
  
   <p class="block--content-margin-left">
   ������� ������ ����������� ����� �������� ������ ���, ��� ������, �� "� ����� �����
   ���������� ���" �� "� ���� ������ ���� - ��� �� ����� ��������", ��� �� �������
   ��������� ����, �� ���� ����� ���������� �� ������������ �����
   </p>
  
   <p class="block--content-margin-left">
   ������� ������ ����������� ����� �������� ������ ���, ��� ������, �� "� ����� �����
   ���������� ���" �� "� ���� ������ ���� - ��� �� ����� ��������", ��� �� �������
   ��������� ����, �� ���� ����� ���������� �� ������������ �����
   </p>
  
   <p class="block--content-margin-left">
   ������� ������ ����������� ����� �������� ������ ���, ��� ������, �� "� ����� �����
   ���������� ���" �� "� ���� ������ ���� - ��� �� ����� ��������", ��� �� �������
   ��������� ����, �� ���� ����� ���������� �� ������������ �����
   </p>
  
   <p class="block--content-margin-left">
   ������� ������ ����������� ����� �������� ������ ���, ��� ������, �� "� ����� �����
   ���������� ���" �� "� ���� ������ ���� - ��� �� ����� ��������", ��� �� �������
   ��������� ����, �� ���� ����� ���������� �� ������������ �����
   </p>
   </article>
  
   <article class="block--article-surround">
   <img class="block__img block__img--poster" src="img/sim-lystkiv-grucka-chubaia.jpg">
  
   <h2 class="block__h2 block--content-margin-left"><a href="#">������� �ѳ�����</a></h2>
  
   <p class="block--content-margin-left">
   � ������ ������ ���� ������� � �������� ѳ���� �������. � ��� ��������� ������� ������
   ����� �������, ����������� ����������� ������� ����.
   </p>
   </article>
  
   <article class="block--article-surround">
   <img class="block__img block__img--poster" src="img/vystavka-koreneplastyky.jpg">
  
   <h2 class="block__h2 block--content-margin-left">
   <a href="#">�������� �������������� �������� ����������</a>
   </h2>
  
   <p class="block--content-margin-left">
   ������� ���������, ������������ ������� � �����, ������� ����, ���������� ������� ������
   � ������� 30 �����, ��������� �������� �� �������, �����, �������� �����. �� �������
   ����������� � ����� �� ����� ���������, �� ����������� ���������������
   </p>
   </article>
   </main>
   <aside class="today block block--border-orange grid_6">
   <h1 class="block__h1 block--color-orange">��������</h1>
  
   <a class="see-more" href="#">����������� ���� ��䳿</a>
  
   <article class="block--article-surround">
   <img class="block__img block__img--poster" src="img/afisha-mykola-falafivka.jpg">
  
   <h2 class="block__h2 block--content-margin-left">
   <a href="#">������� ������ � �����������</a>
   </h2>
  
   <p class="block--content-margin-left">
   ������� ������ ����������� ����� �������� ������ ���, ��� ������, �� "� ����� �����
   ���������� ���" �� "� ���� ������ ���� - ��� �� ����� ��������", ��� �� �������
   ��������� ����, �� ���� ����� ���������� �� ������������ �����
   </p>
   </article>
  
   <article class="block--article-surround">
   <img class="block__img block__img--poster" src="img/sim-lystkiv-grucka-chubaia.jpg">
  
   <h2 class="block__h2 block--content-margin-left"><a href="#">������� �ѳ�����</a></h2>
  
   <p class="block--content-margin-left">
   � ������ ������ ���� ������� � �������� ѳ���� �������. � ��� ��������� ������� ������
   ����� �������, ����������� ����������� ������� ����.
   </p>
   </article>
  
   <article class="block--article-surround">
   <img class="block__img block__img--poster" src="img/vystavka-koreneplastyky.jpg">
  
   <h2 class="block__h2 block--content-margin-left">
   <a href="#">�������� �������������� �������� ����������</a>
   </h2>
  
   <p class="block--content-margin-left">
   ������� ���������, ������������ ������� � �����, ������� ����, ���������� ������� ������
   � ������� 30 �����, ��������� �������� �� �������, �����, �������� �����. �� �������
   ����������� � ����� �� ����� ���������, �� ����������� ���������������
   </p>
   </article>
   </aside>
   </section>
  
  
   </main>
  
   <footer class="footer">
   <div class="container_12">
   <div class="wrap">
   <article class="grid_4 link-block alpha">
   <h3 class="title link-block--color link-block__header">��� �LvivOnline� </h3>
   <ul class="link-block__list link-block--color">
   <li><a class="link-block--color" href="#">��� ����</a></li>
   <li><a class="link-block--color" href="#">��������</a></li>
   <li><a class="link-block--color" href="#">��������</a></li>
   <li><a class="link-block--color" href="#">����� �����</a></li>
   </ul>
   </article>
  
   <article class="grid_4 link-block">
   <h3 class="title link-block--color link-block__header">��������� �������</h3>
   <ul class="link-block__list link-block--color">
   <li><a class="link-block--color" href="#">������ �����</a></li>
   <li><a class="link-block--color" href="#">��������� ��������</a></li>
   <li><a class="link-block--color" href="#">������ ������</a></li>
   <li><a class="link-block--color" href="#">�������</a></li>
   </ul>
   </article>
  
   <article class="grid_4 link-block omega">
   <h3 class="title link-block--color link-block__header">����������</h3>
   <a class="link-block--color follow follow__rss" href="#"></a>
   <a class="link-block--color follow follow__twitter" href="#"></a>
   <a class="link-block--color follow follow__facebook" href="#"></a>
   <a class="link-block--color follow follow__vk" href="#"></a>
   <a class="link-block--color follow follow__lg" href="#"></a>
   <a class="link-block--color follow follow__google-plus" href="#"></a>
   <a class="link-block--color follow follow__pinterest" href="#"></a>
   <a class="link-block--color follow follow__instagram" href="#"></a>
   </article>
  
   <div class="all-logos grid_12 alpha omega">
   <a class="all-logos__link lviv" target="_blank" href="http://lviv-online.com/ua/"></a>
   <a class="all-logos__link frankivsk" target="_blank" href="http://frankivsk-online.com/"></a>
   <a class="all-logos__link ternopil" target="_blank" href="http://ternopil-online.com/"></a>
   <a class="all-logos__link lutsk" target="_blank" href="http://lutsk-online.com/"></a>
   <a class="all-logos__link uzhgorod" target="_blank" href="http://uzhgorod-online.com/"></a>
   <a class="all-logos__link chernivtsi" rel="nofollow" href="http://chernivtsi-online.net/"></a>
   </div>
  
   <div class="copyright grid_12 alpha omega">
   <span>
   � 2009 - 2014, lviv-online.com <br/> ������������ ���������� ������� ��� (�� ��������� ���
   ������������) �������������� �� �������� ������������ ������ � ��������� ������� ����� �����
   �LvivOnline - �������� ����� � ������ <br/> ������ �� WordPress | Log in | �������: 148, ������:
   0.403
   </span>
   </div>
   </div>
  
   </div>
   </footer>*/
  exports.header = header;
});