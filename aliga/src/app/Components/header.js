import React from 'react';


export var header = React.createClass({
    render: function () {
     console.log(this.props)
        return (
            <header className="header ">
                <nav className=" main-menu wrap container_12">
                    <a className="grid_2 rent main-menu__link " href="#">Rent</a>
                    <a className="grid_2 sale main-menu__link" href="#">Sale</a>
                    <a className="grid_2 daily-rent main-menu__link" href="#">Daily rent</a>
                    <a className="grid_2 more-service main-menu__link" href="#">more service</a>
                    <a className="grid_2 forum main-menu__link" href="#">Forum</a>
                    <a className="grid_2 my-office main-menu__link" href="#">My office</a>
                </nav>
                <nav className="search-menu container_12">
                </nav>
            </header>)

    }

});



/*
 <header class="header ">
 <nav class=" main-menu wrap container_12">
 <a class="grid_2 rent main-menu__link " href="#">Оренда</a>
 <a class="grid_2 sale main-menu__link" href="#">Продаж</a>
 <a class="grid_2 daily-rent main-menu__link" href="#">Подобова оренда</a>
 <a class="grid_2 more-service main-menu__link" href="#">Додаткові послуги</a>
 <a class="grid_2 forum main-menu__link" href="#">Форум</a>
 <a class="grid_2 my-office main-menu__link" href="#">Мій кабінет</a>
 </nav>
 <nav class="search-menu container_12">

 </nav>
 </header>

 <main class="container_12 wrap main">


 <aside class="grid_4">
 <div class="recommend block block--border-blue">
 <h1 class="block__h1 block--color-blue">Рекомендуємо</h1>

 <article>
 <img class="block__img" src="img/afisha-jazz-bezz-2014.png">

 <h2 class="block__h2"><a href="#">ХIV міжнародний джазовий фестиваль «Jazz Bez»</a></h2>

 <p>
 Чотирнадцятий «Jazz Bez» об’єднає довкола джазу Київ, Харків, Тернопіль,
 Івано-Франківськ, Рівне, Луцьк, Мостиська, Люблін, Санок, Вроцлав, Білосток, Новицю,
 Перемишль. Ідеологічним і організаційним серцем Фестивалю є Львів
 </p>

 <p>
 Чотирнадцятий «Jazz Bez» об’єднає довкола джазу Київ, Харків, Тернопіль,
 Івано-Франківськ, Рівне, Луцьк, Мостиська, Люблін, Санок, Вроцлав, Білосток, Новицю,
 Перемишль. Ідеологічним і організаційним серцем Фестивалю є Львів
 </p>

 <p>
 Чотирнадцятий «Jazz Bez» об’єднає довкола джазу Київ, Харків, Тернопіль,
 Івано-Франківськ, Рівне, Луцьк, Мостиська, Люблін, Санок, Вроцлав, Білосток, Новицю,
 Перемишль. Ідеологічним і організаційним серцем Фестивалю є Львів
 </p>

 <p>
 Чотирнадцятий «Jazz Bez» об’єднає довкола джазу Київ, Харків, Тернопіль,
 Івано-Франківськ, Рівне, Луцьк, Мостиська, Люблін, Санок, Вроцлав, Білосток, Новицю,
 Перемишль. Ідеологічним і організаційним серцем Фестивалю є Львів
 </p>
 </article>
 </div>
 </aside>

 <section class="grid_8 ">
 <main class="today block block--border-orange grid_6">
 <h1 class="block__h1 block--color-orange">Сьогодні</h1>

 <a class="see-more" href="#">переглянути інші події</a>

 <article class="block--article-surround">
 <img class="block__img block__img--poster" src="img/afisha-mykola-falafivka.jpg">

 <h2 class="block__h2 block--content-margin-left">
 <a href="#">Вистава «Втеча з реальності»</a>
 </h2>

 <p class="block--content-margin-left">
 Вистава змушує замислитись бодай невелику частку тих, хто вважає, що "в житті треба
 спробувати все" та "в кого сильна воля - той не стане залежним", щоб не зробити
 фатальний крок, за яким немає повернення до повноцінного життя
 </p>

 <p class="block--content-margin-left">
 Вистава змушує замислитись бодай невелику частку тих, хто вважає, що "в житті треба
 спробувати все" та "в кого сильна воля - той не стане залежним", щоб не зробити
 фатальний крок, за яким немає повернення до повноцінного життя
 </p>

 <p class="block--content-margin-left">
 Вистава змушує замислитись бодай невелику частку тих, хто вважає, що "в житті треба
 спробувати все" та "в кого сильна воля - той не стане залежним", щоб не зробити
 фатальний крок, за яким немає повернення до повноцінного життя
 </p>

 <p class="block--content-margin-left">
 Вистава змушує замислитись бодай невелику частку тих, хто вважає, що "в житті треба
 спробувати все" та "в кого сильна воля - той не стане залежним", щоб не зробити
 фатальний крок, за яким немає повернення до повноцінного життя
 </p>

 <p class="block--content-margin-left">
 Вистава змушує замислитись бодай невелику частку тих, хто вважає, що "в житті треба
 спробувати все" та "в кого сильна воля - той не стане залежним", щоб не зробити
 фатальний крок, за яким немає повернення до повноцінного життя
 </p>
 </article>

 <article class="block--article-surround">
 <img class="block__img block__img--poster" src="img/sim-lystkiv-grucka-chubaia.jpg">

 <h2 class="block__h2 block--content-margin-left"><a href="#">Вистава «Сільва»</a></h2>

 <p class="block--content-margin-left">
 В основі сюжету доля актриси і співачки Сільви Вареску. У неї закоханий молодий офіцер
 Едвін Волянюк, представник знаменитого княжого роду.
 </p>
 </article>

 <article class="block--article-surround">
 <img class="block__img block__img--poster" src="img/vystavka-koreneplastyky.jpg">

 <h2 class="block__h2 block--content-margin-left">
 <a href="#">Виставка коренепластики Любомира Калиневича</a>
 </h2>

 <p class="block--content-margin-left">
 Казкові персонажі, різноманітні тварини і птахи, красиві вази, помережені узорами палиці
 – близько 30 робіт, створених майстром із коренів, гілок, наростів дерев. Ця «лісова
 скульптура» є одним із видів мистецтва, що називається коренепластикою
 </p>
 </article>
 </main>
 <aside class="today block block--border-orange grid_6">
 <h1 class="block__h1 block--color-orange">Сьогодні</h1>

 <a class="see-more" href="#">переглянути інші події</a>

 <article class="block--article-surround">
 <img class="block__img block__img--poster" src="img/afisha-mykola-falafivka.jpg">

 <h2 class="block__h2 block--content-margin-left">
 <a href="#">Вистава «Втеча з реальності»</a>
 </h2>

 <p class="block--content-margin-left">
 Вистава змушує замислитись бодай невелику частку тих, хто вважає, що "в житті треба
 спробувати все" та "в кого сильна воля - той не стане залежним", щоб не зробити
 фатальний крок, за яким немає повернення до повноцінного життя
 </p>
 </article>

 <article class="block--article-surround">
 <img class="block__img block__img--poster" src="img/sim-lystkiv-grucka-chubaia.jpg">

 <h2 class="block__h2 block--content-margin-left"><a href="#">Вистава «Сільва»</a></h2>

 <p class="block--content-margin-left">
 В основі сюжету доля актриси і співачки Сільви Вареску. У неї закоханий молодий офіцер
 Едвін Волянюк, представник знаменитого княжого роду.
 </p>
 </article>

 <article class="block--article-surround">
 <img class="block__img block__img--poster" src="img/vystavka-koreneplastyky.jpg">

 <h2 class="block__h2 block--content-margin-left">
 <a href="#">Виставка коренепластики Любомира Калиневича</a>
 </h2>

 <p class="block--content-margin-left">
 Казкові персонажі, різноманітні тварини і птахи, красиві вази, помережені узорами палиці
 – близько 30 робіт, створених майстром із коренів, гілок, наростів дерев. Ця «лісова
 скульптура» є одним із видів мистецтва, що називається коренепластикою
 </p>
 </article>
 </aside>
 </section>


 </main>

 <footer class="footer">
 <div class="container_12">
 <div class="wrap">
 <article class="grid_4 link-block alpha">
 <h3 class="title link-block--color link-block__header">Про «LvivOnline» </h3>
 <ul class="link-block__list link-block--color">
 <li><a class="link-block--color" href="#">Про сайт</a></li>
 <li><a class="link-block--color" href="#">Контакти</a></li>
 <li><a class="link-block--color" href="#">Партнери</a></li>
 <li><a class="link-block--color" href="#">Карта сайту</a></li>
 </ul>
 </article>

 <article class="grid_4 link-block">
 <h3 class="title link-block--color link-block__header">Зворотній зв’язок</h3>
 <ul class="link-block__list link-block--color">
 <li><a class="link-block--color" href="#">Додати подію</a></li>
 <li><a class="link-block--color" href="#">Власникам закладів</a></li>
 <li><a class="link-block--color" href="#">Додати заклад</a></li>
 <li><a class="link-block--color" href="#">Реклама</a></li>
 </ul>
 </article>

 <article class="grid_4 link-block omega">
 <h3 class="title link-block--color link-block__header">Слідкувати</h3>
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
 © 2009 - 2014, lviv-online.com <br/> Використання матеріалів можливе при (не закритому для
 індексування) гіперпосиланні на сторінку оригінальної статті з вказанням повного імені сайту
 «LvivOnline - Путівник подій у місті» <br/> Працює на WordPress | Log in | запитів: 148, секунд:
 0.403
 </span>
 </div>
 </div>

 </div>
 </footer>*/