require(["jQuery"], function($) {

  function expand(chapter) {

    chapter.show();

    if (chapter.length != 0) {

      $children = chapter.children('ul.articles');

      if ($children.length > 0) {
        $children.show();
      }
      expand(chapter.parent());
    }
  }

  function addClickListener() {
    $('li.chapter > span').on('click', function (e) {
      e.preventDefault();

      // hide all chapters
      $('li.chapter').children('ul.articles').hide();

      // expand the chapter we clicked on
      $chapter = $(this);
      expand($chapter);

      // expand the chapter that is currently active
      $activeChapter = $('li.chapter.active');
      expand($activeChapter);
    });
  }

  gitbook.events.bind("page.change", function() {
    addClickListener()

    // hide all chapters
    $('li.chapter').children('ul.articles').hide();

    // expand the chapter that is currently active
    $chapter = $('li.chapter.active');
    expand($chapter);
  });

});