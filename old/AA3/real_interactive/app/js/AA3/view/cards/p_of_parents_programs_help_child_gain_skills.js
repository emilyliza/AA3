var AA3 = _.extend({}, {CardCharts: {}}, AA3)

_.extend(AA3.CardCharts, {
  p_of_parents_programs_help_child_gain_skills: function () { 
    // Static vars
  
    function factory() {
      // Bad globals!! - <3 Reed
      var meta = metaMap.get('p_of_parents_programs_help_child_gain_skills')[0];

      function chart(holder) {
        holder.call(AA3.d3.bigNumberAndDonutQuestion()
                .metaData(meta)
                .enableMoreInfo(false)
                .fillCard(true));
      }

      // Chart attributes
      return chart;
    }
    
    return factory; 
  }()

});

