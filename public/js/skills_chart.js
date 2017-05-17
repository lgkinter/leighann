//var height = 700; // Skills positioning and length of text
//var width = 700;

var div = document.getElementById("skills-wrapper");
var svg = d3.select(div).append("svg")
var g = svg.append("g");

var radius;
var width;
var height;
var x = d3.scale.linear().range([0, 2 * Math.PI]);
var y;
var arc;

var padding = 5;
var duration = 1000;
var line_length = 10;

var formatNumber = d3.format(",d");

function redraw(){
  draw();
};

function draw(){

  // Extract the width and height that was computed by CSS.
  d3.selectAll("#center-label").remove();
  d3.selectAll("#center-label-background").remove();

  width = div.clientWidth;
  height = width;
  radius = (Math.min(height,width) / 2) - 10;
  y = d3.scale.linear().range([0, radius]);

  svg.attr("class", "skills-svg")
      .attr("width", width) // removed + padding * 2
      .attr("height", height);

  g.attr("transform", "translate(" + [radius + padding, radius + padding] + ")");

  var partition = d3.layout.partition()
    .sort(null)
    .value(function(d) { return d.size; });

  arc = d3.svg.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, d.y ? y(d.y) : d.y); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

  var labelFits = function(d) { return x(d.x + d.dx) - x(d.x) > 0.05; };

  d3.json("js/skills.json", function(error, root) {
    if (error) throw error;

    var nodes = partition.nodes(root);

    var path = g.selectAll("path").data(nodes);
    path.enter().append("path")
      .attr("class", "skills-path")
      .attr("id", function(d, i) { return "path-" + i; })
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", function(d) { return colors(d); })
      .on("click", function(d) {
          return d.depth < 4 ? click(d) : click(d.parent)
      })
      .on("mouseover", mouseOver).on("mouseout", mouseOut);

    var text = g.selectAll("text").data(nodes);

    var textEnter = text.enter().append("text")
      .style("fill-opacity", 1)
      .style("fill", function(d) { return labelFits(d) ? "white" : "none"; })
      .attr("text-anchor", function(d) { return x(d.x + d.dx / 2) > Math.PI ? "end" : "start"; })  // Checks whether on right or left
      .attr("dy", ".35em")
      .attr("transform", function(d) {
          var multiline = (d.name || "").split(' ').length > 1;
          var angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90;
          var rotate = angle + (multiline ? -.5 : 0);
          return "rotate(" + rotate + ")translate(" + (y(d.y) + padding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")"; // -180 rotation if on left side
      });

    // First line truncate long text with ellipsis
    textEnter.append("tspan")
        .attr("x", 0)
        .text(function(d) {
          return split_lines(d)[0];
        });

    // Second line
    textEnter.append("tspan")
        .attr("x", 0)
        .attr("dy", "1.1em")
        .text(function(d) {
          return split_lines(d)[1];
        });

    // Center circle
    d3.select(".skills-svg")
      .append("circle")
      .attr("id", "center-label-background")
      .attr("cx", radius+padding)
      .attr("cy", radius+padding)
      .attr("r", 19)
      .attr("fill", "transparent")
      .attr("pointer-events", "none");

    // Center circle label
    d3.select(".skills-svg")
      .append("text")
      .attr("id", "center-label")
      .text("Skills")
      .style("font-family", "Open Sans")
      .style("font-size", "20px")
      .attr("x", radius+padding)
      .attr("y", radius+padding*2)
      .attr("text-anchor", "middle")
      .attr("pointer-events", "none");

    function click(d) {
      path.transition()
        .duration(duration)
        .attrTween("d", arcTween(d))
        .each("end", function(d, i) {
          d3.select(text[0][i]).style("fill", function(d) {
              return labelFits(d) ? "white" : "none";
          });
        });

        text.style("visibility", function(e) {
            return isParentOf(d, e) ? null : d3.select(this).style("visibility");
          })
          .transition()
          .duration(duration)
          .attrTween("text-anchor", function(d) {
            return function() {
              return x(d.x + d.dx / 2) > Math.PI ? "end" : "start";
            };
          })
          .attrTween("transform", function(d) {
            var multiline = (d.name || "").split(" ").length > 1;
            return function() {
                var angle = x(d.x + d.dx / 2) * 180 / Math.PI - 90;
                var rotate = angle + (multiline ? -.5 : 0);
                return "rotate(" + rotate + ")translate(" + (y(d.y) + padding) + ")rotate(" + (angle > 90 ? -180 : 0) + ")";
            };
          })
          .style("fill-opacity", function(e) {
            return isParentOf(d, e) ? 1 : 1e-6;
          })
          .each("end", function(e) {
            d3.select(this).style("visibility", isParentOf(d, e) ? null : "hidden");
          });

          // Center label
          if (d.depth == 0) {
              d3.select("#center-label")
                .text("Skills")
                .style("font-family", "Open Sans")
                .style("font-size", "20px");
          } else {
              d3.select("#center-label")
                .style("font-family", "FontAwesome")
                .style("font-size", "18px")
                .text(function(d) { return '\uf010'; });
              d3.select("#center-label-background")
                .transition()
                .delay(750)
                .style("fill", colors(d.parent));
          };

    };
  });
};

// Draw for the first time to initialize.
draw();

// Redraw based on the new size whenever the browser window is resized.
window.addEventListener("resize", redraw);

function split_lines(d) {
  var first = d.name;
  var second = "";
  var words = d.name.split(" ");

  if (d.depth == 0) {
    first = ""; // Leave blank for depth 0 --> Skills
  } else if (d.size > 0 && d.size < 51) {
    first = d.name;
  } else if (words.length > 2 && (words[0].length + words[1].length + words[2].length + 2) <= line_length) {
    first = words.slice(0,3).join(" ");
    second = words.slice(3).join(" ") || "";
  } else if (words.length > 1 && (words[0].length + words[1].length + 1) <= line_length) {
    first = words.slice(0,2).join(" ");
    second = words.slice(2).join(" ") || "";
  } else {
    first = words[0];
    second = words.slice(1).join(" ") || "";
  };

  if (second != "") {
    second = (second.length > line_length) ? second.substring(0, line_length) + "…" : second;
  } else if (first != "") {
    first = (first.length > line_length) ? first.substring(0, line_length) + "…" : first;
  };

  return [first, second];
};

function getAncestors(node) {
    var path = [];
    var current = node;
    while (current.parent) {
        path.unshift(current); // adds current node to path array
        current = current.parent;
    }
    path.unshift(current)
    return path;
};

function displayDetails(d) {
    d3.select("#skills-name").text(d.depth == 3 ? d.parent.name : d.name);
    d3.select("#skills-years").text(d.depth == 3 ? d.parent.years : d.years);
    d3.select("#skills-description").html(d.depth == 3 ? d.parent.description : d.description);
}

function defaultDetails() {
    d3.select("#skills-name").text("Skills & Tools");
    d3.select("#skills-years").text("");
    d3.select("#skills-description").html(
    "<i class='fa fa-chevron-circle-left fa-lg' aria-hidden='true'></i>"+
    " Click any tile to zoom in."+
    "<br><br><i class='fa fa-search-minus fa-lg' aria-hidden='true'></i>"+
    " Click the center to zoom out."+
    "<br><br><i class='fa fa-hand-o-up fa-lg' aria-hidden='true'></i>"+
    " Hover for more details.");
}

function mouseOver(d) {
    displayDetails(d);
    if (d.depth < 4)
        d3.select(this).style("cursor", "pointer");
    var ancestorArray = getAncestors(d);
    d3.selectAll("path").classed("highlighted-path", false);
    d3.selectAll("text").classed("highlighted-text", false);
    d3.selectAll("path").filter(function(node) {
        return ancestorArray.indexOf(node) >= 0;
    }).classed("highlighted-path", true);
    d3.selectAll("text").filter(function(node) {
        return ancestorArray.indexOf(node) >= 0;
    }).classed("highlighted-text", true);
    d3.select("#center-label-background").classed("highlighted-path", true);
    d3.select("#center-label").classed("highlighted-text", true);
};

function mouseOut(d) {
    defaultDetails();
    d3.selectAll(".highlighted-path").classed("highlighted-path", false);
    d3.selectAll(".highlighted-text").classed("highlighted-text", false);
};

function colors(d) {

    if (d.depth == 1) {
      if (d.name == "Management & Communications") //Investor owned
          return "#A41545";
      if (d.name == "Mathematics & Data") //Nation states
          return "#074F57";
      if (d.name == "Technical") //State owned
          return "#4D173C"; //BA7BA1
    } else if (d.depth == 2) {
      if (d.parent && d.parent.name == "Management & Communications")
          return "#B43F66";
      if (d.parent && d.parent.name == "Mathematics & Data")
          return "#346F75";
      if (d.parent && d.parent.name == "Technical")
          return "#6D415F";
    } else if (d.depth == 3) {
      if (d.parent && d.parent.parent.name == "Management & Communications")
          return "#C56A88";
      if (d.parent && d.parent.parent.name == "Mathematics & Data")
          return "#618F94";
      if (d.parent && d.parent.parent.name == "Technical")
          return "#8D6B82";
    } else {
      return "transparent";
    };
  };

// Interpolate the scales
function arcTween(d) {
    var my = maxY(d);
    var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]);
    var yd = d3.interpolate(y.domain(), [d.y, my]);
    var yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
    return function(d) {
        return function(t) {
            x.domain(xd(t));
            y.domain(yd(t)).range(yr(t));
            return arc(d);
        };
    };
};

function maxY(d) {
    return d.children ? Math.max.apply(Math, d.children.map(maxY)) : d.y + d.dy;
};

function isParentOf(p, c) {
    if (p === c)
        return true;
    if (p.children) {
        return p.children.some(function(d) {
            return isParentOf(d, c);
        });
    }
    return false;
};
