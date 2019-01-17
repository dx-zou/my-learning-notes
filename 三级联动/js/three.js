window.onload = function() {
    function $(obj) {
        return document.getElementById(obj);
    }
    var prov = $("province");
    var city = $("city");
    var county = $("county");
    //保存当前的省市县的value值
    var current = {
        prov: "",
        city: "",
        county: ""
    }
    /*加载省份列表 ,页面一加载完毕就先生成省份列表 */
    ;(function() {
        var len = province.length;
        for(var i = 0; i < len; i++) {
            var option = document.createElement("option");
            option.innerHTML = province[i]["name"];
            option.value = i;
            prov.appendChild(option);
        }     
    })()
    /*加载地级市列表 */
    prov.onchange = function() {
        var val = this.options[this.selectedIndex].value;
        console.log(this.value);
        
        if (val != current.prov) {
            current.prov = val;
        }
        if (val) {
            city.length = 1;
            var len = province[val]["city"].length;
            for(var i = 0; i < len; i++) {
                var option = document.createElement("option");
                option.innerHTML = province[val]["city"][i]["name"];
                option.value = i;
                city.appendChild(option);
            }
        }
    }
    /* 加载县级列表 */
    city.onchange = function() {
        var val = this.options[this.selectedIndex].value;
        if (val != current.city) {
            current.city = val;
        }
        //如果val不为空
        if (val) {
            county.length = 1;
            var len = province[current.prov]["city"][val].districtAndCounty.length;
            for(var i = 0; i < len; i++) {
                var option = document.createElement("option");
                option.innerText = province[current.prov]["city"][val].districtAndCounty[i];
                option.value = i;
                county.appendChild(option);
            }
        }
    }
    
}