function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  if (eventId == 1){
	  evenprice = 91.25 ;
	  total = evenprice * ticknum;
  }
  else if (eventId == 2){
	  evenprice = 79.88 ;
	  total = evenprice * ticknum;
  }
  else if (eventId == 3){
	  evenprice = 83.12 ;
	  total = evenprice * ticknum;
  }
  else{
	  evenprice = 100 ;
	  total = evenprice * ticknum;
  }
  return total;
}


