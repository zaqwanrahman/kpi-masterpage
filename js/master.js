// UI variables
const perTotalUI = document.getElementById('percentage-total');
const perColorUI = document.getElementById('percentage-color');
const perValidUI = document.getElementById('percentage-weightage');
const appendAreaUI = document.querySelector('.append-area');
const addButtonUI = document.getElementById('add');
const pencapaianButtonUI = document.getElementById('pencapaian');


// Dynamic Tabs
const tabsMenuUI = document.querySelector('.tabs-menu');

const tabsAreaUI = document.querySelector('.tabs-area');

const tableAreaUI = document.querySelector('.tabs-table');

// Save Reminder 
// window.addEventListener("beforeunload", function(event) {
//     event.returnValue = 0;
// });


// Append Table
addButtonUI.addEventListener('click', () => {
  let counter = parseInt(document.getElementById('counter').value);
  
  appendAreaUI.insertAdjacentHTML('beforeend', `
    <tr id="row-${counter}">
      
      <td style="word-break: break-all;" class="border-dark">
        <select class="form-select form-select-sm" id="fungsi-${counter}" name="fungsi[]" >
          <option selected value="N/A">N/A</option>
          <option value="Kad Skor Korporat" >Kad Skor Korporat</option>
          <option value="Kewangan" >Kewangan</option>
          <option value="Pelanggan" >Pelanggan</option>
          <option value="Kecemerlangan Operasi" >Kecemerlangan Operasi</option> 
          <option value="Manusia & Proses" >Manusia & Proses</option> 
          <option value="Kolaborasi" >Kolaborasi</option>
        </select>
      </td>

      <td style="word-break: break-all;" class="border-dark">
        <textarea rows="10" cols="50" id="objektif-${counter}" name="objektif[]" ></textarea>
      </td>

      <td style="word-break: break-all;" class="border-dark">
        <textarea rows="10" cols="50" id="metrik-${counter}" name="metrik[]" ></textarea>
      </td>

      <td style="word-break: break-all;" class="border-dark">
        <select class="form-select form-select-sm" id="ukuran-${counter}" name="ukuran[]">
          <option selected value="N/A">N/A</option>
          <option value="Quantity" >Quantity</option>
          <option value="Ratio" >Ratio</option>
          <option value="Rating" >Rating</option>
          <option value="Percentage (%)" >Percentage(%)</option>  
          <option value="Date (dd/mm/yyyy)" disabled >Date (dd/mm/yyyy)</option> 
          <option value="Month/Year" disabled >Month/Year</option> 
          <option value="Quarter" disabled >Quarter</option>
          <option value="Hours" >Hours</option> 
          <option value="RM (billion)" >RM (billion)</option>
          <option value="RM (million)" >RM (million)</option> 
          <option value="RM (*000)" >RM (*000)</option>
          <option value="KM/Miles" >KM/Miles</option>
        </select>
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="3" class="input_ukuran" id="peratus-${counter}" name="peratus[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="4" class="input_threshold" id="threshold-${counter}" name="threshold[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="4" class="input_base" id="base-${counter}" name="base[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="4" class="input_stretch" id="stretch-${counter}" name="stretch[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="4"  class="input_pencapaian" id="pencapaian-${counter}" name="pencapaian[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text"  id="total-${counter}" class="form-control form-control-sm" name="total[]" value="0" disabled="disabled">
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text"  id="score-${counter}" class="form-control form-control-sm" name="total[]" value="0" disabled="disabled">
      </td>

      <td>
        <button type="button" id="${counter}" class="btn btn-danger btn-sm remove"><i id="${counter}" class="fa fa-minus-circle"></i></button>
      </td>
      
    </tr>
  `);

  tabsMenuUI.insertAdjacentHTML('beforeend', `
    
    <li class="nav-item" >
        <a class="nav-link " data-toggle="tab" href="#pencapaian${counter}" role="tab">Pencapaian ${counter}</a>
    </li>

  `);

  tabsAreaUI.insertAdjacentHTML('beforeend', `
    
    <div class="tab-pane fade show" id="pencapaian${counter}">

      <table class="table table-bordered sticky-top bg-light bg-gradient text-dark">
                <tr>
                    <th class="w-25" >Gred : 
                        <input class="font-weight-bold" id="status" name="status" value="NO GRED" disabled>
                        <input class="font-weight-bold" id="percentage-color" disabled>
                    </th>
                    <th class="w-25" >Overall Score : 
                        <input class="font-weight-bold" id="percentage-total"  value="0" disabled>
                    </th>
                    <th class="w-25" >Total Weightage : 
                        <input class="font-weight-bold w-25" id="percentage-weightage" name="weightage" value="0" disabled>
                    </th>
                </tr>
            </table>

              <div class="float-right pb-2">
                <button type="button" class="btn btn-pencapaian" id="pencapaian" >Tambah Pencapaian</button>
              </div>

                <div class="table-freeze">
                    <table id="master">
                        <thead>
                          <tr>
                            <th class="select" rowspan="2">Fungsi</th>
                            <th class="select" rowspan="2">Objektif KPI</th>
                            <th class="select" rowspan="2">Metrik/Bukti</th>
                            <th rowspan="2">Ukuran</th>
                            <th rowspan="2">Peratus (%)</th>
                            <th colspan="3">KPI Targets</th>
                            <th rowspan="2">Pencapaian</th>
                            <th rowspan="2">Skor KPIdasdada</th>
                            <th rowspan="2">Skor Sebenar</th>
                            <th rowspan="2"><i class="fa fa-cogs" style="font-size: 26px; width: auto;"></i></th>
                          </tr>
                          <tr>
                            <th scope="col" >Threshold</th>
                            <th scope="col" >Base</th>
                            <th scope="col" >Stretch</th>
                          </tr>
                      </thead>
                      <tbody class="tabs-table" >
                          <!-- Display Body --> 
                      </tbody>
                      
        </table>
      </div>
    </div>

  `);

  // Update rows counter value
  counter++;
  document.getElementById('counter').value = counter;  

});

pencapaianButtonUI.addEventListener('click', () => {
  let counter = parseInt(document.getElementById('counter').value);
  
  tableAreaUI.insertAdjacentHTML('beforeend', `
    <tr id="row-${counter}">
      
      <td style="word-break: break-all;" class="border-dark">
        <select class="form-select form-select-sm" id="fungsi-${counter}" name="fungsi[]" >
          <option selected value="N/A">N/A</option>
          <option value="Kad Skor Korporat" >Kad Skor Korporat</option>
          <option value="Kewangan" >Kewangan</option>
          <option value="Pelanggan" >Pelanggan</option>
          <option value="Kecemerlangan Operasi" >Kecemerlangan Operasi</option> 
          <option value="Manusia & Proses" >Manusia & Proses</option> 
          <option value="Kolaborasi" >Kolaborasi</option>
        </select>
      </td>

      <td style="word-break: break-all;" class="border-dark">
        <textarea rows="10" cols="50" id="objektif-${counter}" name="objektif[]" ></textarea>
      </td>

      <td style="word-break: break-all;" class="border-dark">
        <textarea rows="10" cols="50" id="metrik-${counter}" name="metrik[]" ></textarea>
      </td>

      <td style="word-break: break-all;" class="border-dark">
        <select class="form-select form-select-sm" id="ukuran-${counter}" name="ukuran[]">
          <option selected value="N/A">N/A</option>
          <option value="Quantity" >Quantity</option>
          <option value="Ratio" >Ratio</option>
          <option value="Rating" >Rating</option>
          <option value="Percentage (%)" >Percentage(%)</option>  
          <option value="Date (dd/mm/yyyy)" disabled >Date (dd/mm/yyyy)</option> 
          <option value="Month/Year" disabled >Month/Year</option> 
          <option value="Quarter" disabled >Quarter</option>
          <option value="Hours" >Hours</option> 
          <option value="RM (billion)" >RM (billion)</option>
          <option value="RM (million)" >RM (million)</option> 
          <option value="RM (*000)" >RM (*000)</option>
          <option value="KM/Miles" >KM/Miles</option>
        </select>
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="3" class="input_ukuran" id="peratus-${counter}" name="peratus[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="4" class="input_threshold" id="threshold-${counter}" name="threshold[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="4" class="input_base" id="base-${counter}" name="base[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="4" class="input_stretch" id="stretch-${counter}" name="stretch[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text" maxlength="4"  class="input_pencapaian" id="pencapaian-${counter}" name="pencapaian[]" onkeyup="setTotal();" min="0" >
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text"  id="total-${counter}" class="form-control form-control-sm" name="total[]" value="0" disabled="disabled">
      </td>

      <td class="font-weight-bold border-dark">
        <input type="text"  id="score-${counter}" class="form-control form-control-sm" name="total[]" value="0" disabled="disabled">
      </td>

      <td>
        <button type="button" id="${counter}" class="btn btn-danger btn-sm remove"><i id="${counter}" class="fa fa-minus-circle"></i></button>
      </td>
      
    </tr>
  `);

  
  // Update rows counter value
  counter++;
  document.getElementById('counter').value = counter;  

});

// Delete table rows
document.addEventListener('click', (e) => {
  let elClassList = e.target.classList;
  if (elClassList.contains('fa-minus-circle') || elClassList.contains('remove')) {
    let removeButtonID = e.target.id;
    document.getElementById('row-' + removeButtonID).remove();

    let tableRows = document.querySelectorAll('.append-area tr').length;
    for (let i = 0; i < tableRows; i++) {
      document.querySelectorAll('.append-area tr')[i].id = 'row-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[0].id = 'fungsi-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[1].id = 'objektif-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[2].id = 'metrik-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[3].id = 'ukuran-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[4].id = 'peratus-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[5].id = 'threshold-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[6].id = 'base-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[7].id = 'stretch-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[8].id = 'pencapaian-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[9].id = 'total-' + i;
      document.querySelectorAll('.append-area tr#row-' + i + ' td input')[10].id = 'score-' + i;

      document.querySelectorAll('.append-area tr td button')[i].id = i;
      document.querySelectorAll('.append-area tr td button i')[i].id = i;
    }

    document.getElementById('counter').value = tableRows;
    setTotal();

  }

});

// Calculate row TOTAL
function setTotal() {
  let tableRows = document.querySelectorAll('tbody.append-area tr').length;

  // let subTotal = 0;
  let percentageTotal = 0;
  let weightageTotal = 0;


  for (let i = 0; i < tableRows; i++) {
    let peratus = Number(document.getElementById("peratus-" + i).value);
    let threshold = Number(document.getElementById("threshold-" + i).value);
    let base = Number(document.getElementById("base-" + i).value);
    let stretch = Number(document.getElementById("stretch-" + i).value);
    let pencapaian = Number(document.getElementById("pencapaian-" + i).value);

    
    let rowTotal = 0;
    let scoreTotal = 0;

    if ( document.getElementById("peratus-" + i).value == "" || document.getElementById("threshold-" + i).value == "" || document.getElementById("base-" + i).value == "" || document.getElementById("stretch-" + i).value == "" || document.getElementById("pencapaian-" + i).value == "" ) 
    
    {

      document.getElementById("total-" + i).value = 0;
      document.getElementById("score-" + i).value = 0;

    } else {

      // CONDITION ONE
      if (pencapaian <= threshold) {

        rowTotal = document.getElementById("total-" + i).value = 0 ;
        scoreTotal = document.getElementById("score-" + i).value = 0;

        

      } else if (pencapaian >= stretch) {

        rowTotal = document.getElementById("total-" + i).value = 100 ;
        scoreTotal = document.getElementById("score-" + i).value = peratus ;

        

      } else if (pencapaian >= threshold && pencapaian <= base) {

        value1 = parseFloat(pencapaian) - parseFloat(threshold); 
        value2 = parseFloat(base) - parseFloat(threshold); 

        KPIScore = ((( value1 / value2 ) * 35) + 30);
        ScoreSebenar = ((peratus / 100) * KPIScore);

        rowTotal = document.getElementById("total-" + i).value = KPIScore ;
        scoreTotal = document.getElementById("score-" + i).value = ScoreSebenar ;

        

      } else if (pencapaian >= base && pencapaian < stretch) {

        value1 = parseFloat(pencapaian) - parseFloat(base);
        value2 = parseFloat(stretch) - parseFloat(base);

        KPIScore = ((( value1 / value2 ) * 35) + 65);
        ScoreSebenar = ((peratus / 100) * KPIScore);

        rowTotal = document.getElementById("total-" + i).value = KPIScore ;
        scoreTotal = document.getElementById("score-" + i).value = ScoreSebenar ;

        
      } 

      // CONDITION TWO
      if (base >= stretch && stretch <= base) {

        ScoreSebenar = ((peratus / 100) * 30);

        rowTotal = document.getElementById("total-" + i).value = 30 ;
        scoreTotal = document.getElementById("score-" + i).value = ScoreSebenar ;

      }

      // CONDITION THREE
      if (threshold >= base) {

        rowTotal = document.getElementById("total-" + i).value = 0 ;
        scoreTotal = document.getElementById("score-" + i).value = 0;
 
      }

    }

    percentageTotal += scoreTotal;
    weightageTotal += peratus;
    
  }

  // Set weightageTotal & percentageTotal values
  perTotalUI.value = percentageTotal.toFixed(2);
  perValidUI.value = weightageTotal;

  colorClass();
  percentageValid();
}

// Level Color Class

function colorClass() {

      let percentageTotal = document.getElementById("percentage-total").value;
            

      if ( percentageTotal >= 80 ) {

        perColorUI.style.backgroundColor = "#9BC2E6" ;        
        document.getElementsByName("status")[0].value = "PLATINUM";

      } else if ( percentageTotal >= 75 && percentageTotal <= 79 ) {

        perColorUI.style.backgroundColor = "#C6E0B4";
        document.getElementsByName("status")[0].value = "HIGH GOLD";

      } else if ( percentageTotal >= 70 && percentageTotal <= 74.9 ) {

        perColorUI.style.backgroundColor = "#548235";
        document.getElementsByName("status")[0].value = "MID GOLD";

      } else if ( percentageTotal >= 65 && percentageTotal <= 69.9 ) {

        perColorUI.style.backgroundColor = "#806000";
        document.getElementsByName("status")[0].value = "LOW GOLD";

      } else if ( percentageTotal >= 60 && percentageTotal <= 64.9 ) {

        perColorUI.style.backgroundColor = "#FFFF99";
        document.getElementsByName("status")[0].value = "HIGH SILVER";

      } else if ( percentageTotal >= 50 && percentageTotal <= 59.9 ) {

        perColorUI.style.backgroundColor = "#FFFF00";
        document.getElementsByName("status")[0].value = "LOW SILVER";

      } else if ( percentageTotal >= 1 && percentageTotal <= 49.9 ) {

        perColorUI.style.backgroundColor = "#F4B084";
        document.getElementsByName("status")[0].value = "BRONZE";

      } else {

        perColorUI.style.backgroundColor = "#000000";
        document.getElementsByName("status")[0].value = "NO GRED";

      }

}

function percentageValid() {

    let weightageTotal = document.getElementById("percentage-weightage").value;

    if (weightageTotal > 100) {

      document.getElementsByName("weightage")[0].value = "Not more than 100 !!";
      perValidUI.style.color = "#FF0000";
      perValidUI.style.fontWeight = "bold";

    } else {

      document.getElementsByName("weightage")[0].value = weightageTotal;
      perValidUI.style.color = "#000000";
      perValidUI.style.fontWeight = "bold";

    }
}


