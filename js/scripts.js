$(document).ready(function() {
  $("#stress-survey").submit(function(event) {
    event.preventDefault();
    let warningArray = [];
    let copingArray = [];
    let symptomsArray = [];

    $("input:checkbox[name=warning-signs]:checked").each(function() {
      const warningSigns = $(this).val();
      warningArray.push(warningSigns);
    });

    $("input:checkbox[name=coping]:checked").each(function() {
      const copingMechanisms = $(this).val();
      copingArray.push(copingMechanisms);
    });

    $("input:checkbox[name=symptoms]:checked").each(function() {
      const healthSymptoms = $(this).val();
      symptomsArray.push(healthSymptoms);
    });

    if ((warningArray.length >= copingArray.length) && (warningArray.length > symptomsArray.length)) {
      $("#warningsigns-output").show();
    } else if ((symptomsArray.length >= copingArray.length) && (symptomsArray.length > warningArray.length)){
      $("#healthsymptoms-output").show();
    } else {
      $("#coping-output").show();
    }
  });
});