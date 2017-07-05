import "jquery";
export interface TemplateInterface {
  (o?: Object): JQuery;
}

export namespace Template {
  //  生成project列表
  export function ProjectItem(o: any): JQuery {
    var t = $(
      `<div><p>make a project Item ${o.id}, he's name is ${o.name}</p></div>`
    );
    t.find("p").click(function() {
      console.log(o.id, "title has beeb click");
      var title = $(this).text();
      console.log(title);
      $(this).hide();
      $(this).parent().prepend(
        $("<input>")
          .val(title)
          .blur(function() {
            var title = $(this).val();
            $(this).hide();
            $(this).parent().find("p").text(String(title)).show();
          })
          .keyup(function(e) {
            if (e.keyCode == 13) {
              var title = $(this).val();
              $(this).hide();
              $(this).parent().find("p").text(String(title)).show();
            }
          })
          .css({ width: "400px", height: "30px" })
      );
    });
    return t;
  }

  // 对于展开的project列表
  export function ExpondProject(o: any): JQuery {
    var t = $(`
        <div>
            <p>project name is ${o.name}</p>
            ${o.items&&o.items.template().html()}
        </div>
      `);
    return t;
  }
}
