function getParameterValue(parameter)
{
	parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + parameter + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if(results == null)
		return "";
	else
		return results[1];
}

 function loadRCP() {	


		UpdatePopulationChart();
		//----------------
		UpdateEmissionsChart("voc",SECTOR_voc);
		UpdateEmissionsChart("ch4",SECTOR_ch4);
		UpdateEmissionsChart("nh3",SECTOR_nh3);
		//----------------
		UpdateTemperatureChart();
		UpdatePrecipitationChart();
		//----------------
		UpdateSMIchart();
        UpdateNDVIchart();	


 }

	
function set_language(newLang) {	
		
		
        PAGE_LANGUAGE = newLang;
	
		$.getScript("./lang/"+PAGE_LANGUAGE+"/lang." + MAP_CODE + "." + PAGE_LANGUAGE + ".js")
		.done(function( script, textStatus ) {
    
            document.getElementById("lang_bred_map").innerHTML            = lang.lang_bred_map;
			document.getElementById("lang_bred_country").innerHTML        = lang.lang_bred_country;
			document.getElementById("lang_country").innerHTML             = lang.lang_country;
			document.getElementById("lang_var1").innerHTML                = lang.lang_var1;
			document.getElementById("lang_var1year").innerHTML            = lang.lang_var1year;
			document.getElementById("lang_var1value").innerHTML           = lang.lang_var1value;
			document.getElementById("lang_var2").innerHTML                = lang.lang_var2;
			document.getElementById("lang_var2year").innerHTML            = lang.lang_var2year;
			document.getElementById("lang_var2value").innerHTML           = lang.lang_var2value;
			document.getElementById("lang_var3").innerHTML                = lang.lang_var3;
			document.getElementById("lang_var3year").innerHTML            = lang.lang_var3year;
			document.getElementById("lang_var3value").innerHTML           = lang.lang_var3value;
			
			document.getElementById("lang_linkAbout").innerHTML           = lang.lang_linkAbout;
			document.getElementById("lang_linkPop").innerHTML             = lang.lang_linkPop;
			document.getElementById("lang_linkEmissions").innerHTML       = lang.lang_linkEmissions;
			document.getElementById("lang_linkClimate").innerHTML         = lang.lang_linkClimate;
			document.getElementById("lang_linkIndices").innerHTML         = lang.lang_linkIndices;
			
			document.getElementById("lang_infop1").innerHTML              = lang.lang_infop1;
			document.getElementById("lang_infop2").innerHTML              = lang.lang_infop2;
			document.getElementById("lang_title_pop").innerHTML           = lang.lang_linkPop;
			document.getElementById("lang_title_rcp").innerHTML           = lang.lang_title_rcp;
			document.getElementById("lang_rcp_info1").innerHTML           = lang.lang_rcp_info1;
			document.getElementById("lang_rcp_info2").innerHTML           = lang.lang_rcp_info2;
			document.getElementById("lang_rcp_info3").innerHTML           = lang.lang_rcp_info3;
			document.getElementById("lang_select_rcp").innerHTML          = lang.lang_select_rcp;
			document.getElementById("lang_select_region").innerHTML       = lang.lang_select_region;
			
			
			document.getElementById("lang_rcp_rcp45").innerHTML           = lang.lang_rcp45;
			document.getElementById("lang_rcp_rcp85").innerHTML           = lang.lang_rcp85;
			
			document.getElementById("lang_ch4_source").innerHTML          = lang.lang_source;
			document.getElementById("lang_voc_source").innerHTML          = lang.lang_source;
			document.getElementById("lang_nh3_source").innerHTML          = lang.lang_source;
			document.getElementById("lang_pop_source").innerHTML          = lang.lang_source;
			document.getElementById("lang_popfull_source").innerHTML      = lang.lang_source;
			document.getElementById("lang_temp_source").innerHTML         = lang.lang_source;
			document.getElementById("lang_prec_source").innerHTML         = lang.lang_source;
			document.getElementById("lang_ndvi_source").innerHTML         = lang.lang_source;
			document.getElementById("lang_smi_source").innerHTML          = lang.lang_source;

			
			document.getElementById("lang_rcp_rcp45name").innerHTML       = lang.lang_num_rcp45;
			document.getElementById("lang_ch4_rcp45name").innerHTML       = lang.lang_num_rcp45;
			document.getElementById("lang_voc_rcp45name").innerHTML       = lang.lang_num_rcp45;
			document.getElementById("lang_nh3_rcp45name").innerHTML       = lang.lang_num_rcp45;
			document.getElementById("lang_temp_rcp45name").innerHTML      = lang.lang_num_rcp45;
			document.getElementById("lang_prec_rcp45name").innerHTML      = lang.lang_num_rcp45;
			document.getElementById("lang_ndvi_rcp45name").innerHTML      = lang.lang_num_rcp45;
			document.getElementById("lang_smi_rcp45name").innerHTML       = lang.lang_num_rcp45;
			
			
			document.getElementById("lang_rcp_rcp85name").innerHTML       = lang.lang_num_rcp85;
			document.getElementById("lang_ch4_rcp85name").innerHTML       = lang.lang_num_rcp85;
			document.getElementById("lang_voc_rcp85name").innerHTML       = lang.lang_num_rcp85;
			document.getElementById("lang_nh3_rcp85name").innerHTML       = lang.lang_num_rcp85;
			document.getElementById("lang_temp_rcp85name").innerHTML      = lang.lang_num_rcp85;
			document.getElementById("lang_prec_rcp85name").innerHTML      = lang.lang_num_rcp85;
			document.getElementById("lang_ndvi_rcp85name").innerHTML      = lang.lang_num_rcp85;
			document.getElementById("lang_smi_rcp85name").innerHTML       = lang.lang_num_rcp85;			
			
			document.getElementById("lang_title_emissions").innerHTML     = lang.lang_title_emissions;
			
			document.getElementById("lang_ch4_title").innerHTML           = lang.lang_ch4_title;
			document.getElementById("lang_ch4_subtitle").innerHTML        = lang.lang_ch4_subtitle;
			document.getElementById("lang_ch4_subtitle_modal").innerHTML  = lang.lang_ch4_subtitle;
			document.getElementById("lang_ch4_info").innerHTML            = lang.lang_ch4_info;
			
			document.getElementById("lang_ch4_modal_close").innerHTML     = lang.lang_gas_modal_close;
			document.getElementById("lang_no_ch4").innerHTML              = lang.lang_no_gas;
				
			document.getElementById("lang_ch4_rcp45").innerHTML           = lang.lang_rcp45;
			document.getElementById("lang_ch4_rcp85").innerHTML           = lang.lang_rcp85;
			
			document.getElementById("lang_ch4_rcp45_var1").innerHTML      = lang.lang_gas_var1;
			document.getElementById("lang_ch4_rcp45_var2").innerHTML      = lang.lang_gas_var2;
			document.getElementById("lang_ch4_rcp45_var2_by1").innerHTML  = lang.lang_gas_var2_by1;
			document.getElementById("lang_ch4_rcp45_var2_by2").innerHTML  = lang.lang_gas_var2_by2;
			document.getElementById("lang_ch4_rcp85_var1").innerHTML      = lang.lang_gas_var1;
			document.getElementById("lang_ch4_rcp85_var2").innerHTML      = lang.lang_gas_var2;
			document.getElementById("lang_ch4_rcp85_var2_by1").innerHTML  = lang.lang_gas_var2_by1;
			document.getElementById("lang_ch4_rcp85_var2_by2").innerHTML  = lang.lang_gas_var2_by2;			
			document.getElementById("lang_ch4_sec1").innerHTML            = lang.lang_sector1;
			document.getElementById("lang_ch4_sec2").innerHTML            = lang.lang_sector2;
			document.getElementById("lang_ch4_sec3").innerHTML            = lang.lang_sector3;			
			
			document.getElementById("lang_voc_title").innerHTML           = lang.lang_voc_title;
			document.getElementById("lang_voc_subtitle").innerHTML        = lang.lang_voc_subtitle;
			document.getElementById("lang_voc_subtitle_modal").innerHTML  = lang.lang_voc_subtitle;
			document.getElementById("lang_voc_info").innerHTML            = lang.lang_voc_info;
			
			document.getElementById("lang_voc_modal_close").innerHTML     = lang.lang_gas_modal_close;
			document.getElementById("lang_no_voc").innerHTML              = lang.lang_no_gas;
				
			document.getElementById("lang_voc_rcp45").innerHTML           = lang.lang_rcp45;
			document.getElementById("lang_voc_rcp85").innerHTML           = lang.lang_rcp85;
			
			document.getElementById("lang_voc_rcp45_var1").innerHTML      = lang.lang_gas_var1;
			document.getElementById("lang_voc_rcp45_var2").innerHTML      = lang.lang_gas_var2;
			document.getElementById("lang_voc_rcp45_var2_by1").innerHTML  = lang.lang_gas_var2_by1;
			document.getElementById("lang_voc_rcp45_var2_by2").innerHTML  = lang.lang_gas_var2_by2;
			document.getElementById("lang_voc_rcp85_var1").innerHTML      = lang.lang_gas_var1;
			document.getElementById("lang_voc_rcp85_var2").innerHTML      = lang.lang_gas_var2;
			document.getElementById("lang_voc_rcp85_var2_by1").innerHTML  = lang.lang_gas_var2_by1;
			document.getElementById("lang_voc_rcp85_var2_by2").innerHTML  = lang.lang_gas_var2_by2;			
			document.getElementById("lang_voc_sec1").innerHTML            = lang.lang_sector1;
			document.getElementById("lang_voc_sec2").innerHTML            = lang.lang_sector2;
			document.getElementById("lang_voc_sec3").innerHTML            = lang.lang_sector3;
			
			
			document.getElementById("lang_nh3_title").innerHTML           = lang.lang_nh3_title;
			document.getElementById("lang_nh3_subtitle").innerHTML        = lang.lang_nh3_subtitle;
			document.getElementById("lang_nh3_subtitle_modal").innerHTML  = lang.lang_nh3_subtitle;
			document.getElementById("lang_nh3_info").innerHTML            = lang.lang_nh3_info;
			
			document.getElementById("lang_nh3_modal_close").innerHTML     = lang.lang_gas_modal_close;
			document.getElementById("lang_no_nh3").innerHTML              = lang.lang_no_gas;
				
			document.getElementById("lang_nh3_rcp45").innerHTML           = lang.lang_rcp45;
			document.getElementById("lang_nh3_rcp85").innerHTML           = lang.lang_rcp85;
			
			document.getElementById("lang_nh3_rcp45_var1").innerHTML      = lang.lang_gas_var1;
			document.getElementById("lang_nh3_rcp45_var2").innerHTML      = lang.lang_gas_var2;
			document.getElementById("lang_nh3_rcp45_var2_by1").innerHTML  = lang.lang_gas_var2_by1;
			document.getElementById("lang_nh3_rcp45_var2_by2").innerHTML  = lang.lang_gas_var2_by2;
			document.getElementById("lang_nh3_rcp85_var1").innerHTML      = lang.lang_gas_var1;
			document.getElementById("lang_nh3_rcp85_var2").innerHTML      = lang.lang_gas_var2;
			document.getElementById("lang_nh3_rcp85_var2_by1").innerHTML  = lang.lang_gas_var2_by1;
			document.getElementById("lang_nh3_rcp85_var2_by2").innerHTML  = lang.lang_gas_var2_by2;			
			document.getElementById("lang_nh3_sec1").innerHTML            = lang.lang_sector1;
			document.getElementById("lang_nh3_sec2").innerHTML            = lang.lang_sector2;
			document.getElementById("lang_nh3_sec3").innerHTML            = lang.lang_sector3;			
            //----------------------------------------------

			document.getElementById("lang_title_climate").innerHTML       = lang.lang_linkClimate;

			document.getElementById("lang_clim_temp_rcp45").innerHTML     = lang.lang_rcp45;
			document.getElementById("lang_clim_temp_rcp85").innerHTML     = lang.lang_rcp85;
			document.getElementById("lang_clim_prec_rcp45").innerHTML     = lang.lang_rcp45;
			document.getElementById("lang_clim_prec_rcp85").innerHTML     = lang.lang_rcp85;

			document.getElementById("lang_clim_temp").innerHTML           = lang.lang_clim_temp;
			document.getElementById("lang_clim_prec").innerHTML           = lang.lang_clim_prec;
			
			document.getElementById("lang_clim_temp_var1").innerHTML      = lang.lang_clim_var1;
			document.getElementById("lang_clim_temp_var2").innerHTML      = lang.lang_clim_var2;
			document.getElementById("lang_clim_temp_var2_by1").innerHTML  = lang.lang_clim_var2_by1;
			document.getElementById("lang_clim_temp_var2_by2").innerHTML  = lang.lang_clim_var2_by2;
			
			document.getElementById("lang_clim_prec_var1").innerHTML      = lang.lang_clim_var1;
			document.getElementById("lang_clim_prec_var2").innerHTML      = lang.lang_clim_var2;
			document.getElementById("lang_clim_prec_var2_by1").innerHTML  = lang.lang_clim_var2_by1;
			document.getElementById("lang_clim_prec_var2_by2").innerHTML  = lang.lang_clim_var2_by2;
			
            //----------------------------------------------
			
			document.getElementById("lang_title_indices").innerHTML       = lang.lang_title_indices;
			
			document.getElementById("lang_ndvi_title").innerHTML          = lang.lang_ndvi_title;
			document.getElementById("lang_ndvi_subtitle").innerHTML       = lang.lang_ndvi_subtitle;
			document.getElementById("lang_ndvi_subtitle_modal").innerHTML = lang.lang_ndvi_subtitle;
			document.getElementById("lang_ndvi_info").innerHTML           = lang.lang_ndvi_info;
			
			document.getElementById("lang_ndvi_modal_close").innerHTML    = lang.lang_gas_modal_close;
			
			document.getElementById("lang_ndvi_rcp45").innerHTML          = lang.lang_rcp45;
			document.getElementById("lang_ndvi_rcp85").innerHTML          = lang.lang_rcp85;
			
			document.getElementById("lang_ndvi_var1").innerHTML           = lang.lang_clim_var1;
			document.getElementById("lang_ndvi_rcp45_var2").innerHTML     = lang.lang_gas_var2;
			document.getElementById("lang_ndvi_rcp45_var2_by1").innerHTML = lang.lang_gas_var2_by1;
			document.getElementById("lang_ndvi_rcp45_var2_by2").innerHTML = lang.lang_gas_var2_by2;
			document.getElementById("lang_ndvi_rcp85_var2").innerHTML     = lang.lang_gas_var2;
			document.getElementById("lang_ndvi_rcp85_var2_by1").innerHTML = lang.lang_gas_var2_by1;
			document.getElementById("lang_ndvi_rcp85_var2_by2").innerHTML = lang.lang_gas_var2_by2;			
			
			document.getElementById("lang_smi_title").innerHTML           = lang.lang_smi_title;
			document.getElementById("lang_smi_subtitle").innerHTML        = lang.lang_smi_subtitle;
			document.getElementById("lang_smi_subtitle_modal").innerHTML  = lang.lang_smi_subtitle;
			document.getElementById("lang_smi_info").innerHTML            = lang.lang_smi_info;
			
			document.getElementById("lang_smi_modal_close").innerHTML     = lang.lang_gas_modal_close;
			
			document.getElementById("lang_smi_rcp45").innerHTML           = lang.lang_rcp45;
			document.getElementById("lang_smi_rcp85").innerHTML           = lang.lang_rcp85;
			
			document.getElementById("lang_smi_var1").innerHTML            = lang.lang_clim_var1;
			document.getElementById("lang_smi_rcp45_var2").innerHTML      = lang.lang_gas_var2;
			document.getElementById("lang_smi_rcp45_var2_by1").innerHTML  = lang.lang_gas_var2_by1;
			document.getElementById("lang_smi_rcp45_var2_by2").innerHTML  = lang.lang_gas_var2_by2;
			document.getElementById("lang_smi_rcp85_var2").innerHTML      = lang.lang_gas_var2;
			document.getElementById("lang_smi_rcp85_var2_by1").innerHTML  = lang.lang_gas_var2_by1;
			document.getElementById("lang_smi_rcp85_var2_by2").innerHTML  = lang.lang_gas_var2_by2;			


		    SetRCPscenariosChart();
			//----------------
			loadRCP()
		
		})
		.fail(function( jqxhr, settings, exception ) {
			
				set_language("en");
			
		});	
		
		

}	
	
function UpdatePopulationChart() {
				
		DATA_URL1 = "./data/population/"+CLIMATE_CODE+"_population_age_groups.csv";
        DATA_URL2 = "./data/population/"+CLIMATE_CODE+"_population.csv";

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		var MaxData=0; 


		/**
		* Create container for charts
		*/
		var container = am4core.create("population", am4core.Container);
		container.width = am4core.percent(100);
		container.height = am4core.percent(100);
		container.layout = "horizontal";

		/**
		* Population pyramid chart
		*/

		var pyramidChart = container.createChild(am4charts.XYChart);

		pyramidChart.cursor = new am4charts.XYCursor();
		pyramidChart.cursor.behavior = "none";
		//pyramidChart.arrangeTooltips = false;

		pyramidChart.numberFormatter.numberFormat = "#,###.#a";
		pyramidChart.numberFormatter.bigNumberPrefixes = [
		  { "number": 1e+3, "suffix": "M" }
		];

		pyramidChart.dataSource.url = DATA_URL1;
		pyramidChart.dataSource.parser = new am4core.CSVParser();
		pyramidChart.dataSource.parser.options.numberFields = ["col5", "col6", "col7"];
					pyramidChart.dataSource.events.on("parseended", function(ev) {
					sourceData = ev.target.data;
					ev.target.data = getCurrentData();
					  
					if (ev.target.data.length == 0) {
					    return;
  					}
  					var MaxData=0;
  					am4core.array.each(ev.target.data, function(row, i) {
					    if (!ev.target.data[i]) {
    					}
					    else {
      
      					if (Math.max(ev.target.data[i].col5)>MaxData) {
        					MaxData = Math.max(ev.target.data[i].col5);
      					}
      					if (Math.max(ev.target.data[i].col6)>MaxData) {
        					MaxData = Math.max(ev.target.data[i].col6);
      					}
    					}
    
  					});
  
  
  					var MaxLimit = 1.5 * MaxData;
  					pyramidXAxisMale.max = MaxLimit;
  					pyramidXAxisFemale.max = MaxLimit;					  
					  
					});

					function getCurrentData() {
					  var currentData = [];
					  am4core.array.each(sourceData, function(row, i) {
						if (row.col3 == currentYear) {
						  currentData.push(row);
						}
					  });
					  currentData.sort(function(a, b) {
						var a1 = Number(a.col4.replace(/[^0-9]+.*$/, ""));
						var b1 = Number(b.col4.replace(/[^0-9]+.*$/, ""));
						if (a1 > b1) {
						  return 1;
						}
						else if (a1 < b1) {
						  return -1;
						}
						return 0;
					  });
					  return currentData;
					}

					function updateData() {
					  var data = getCurrentData();
					  if (data.length == 0) {
						return;
					  }
					  am4core.array.each(pyramidChart.data, function(row, i) {
						if (!data[i]) {
						  pyramidChart.data[i].col5 = 0;
						  pyramidChart.data[i].col6 = 0;
						}
						else {
							pyramidChart.data[i].col5 = data[i].col5;
							pyramidChart.data[i].col6 = data[i].col6;
      
							if (Math.max(data[i].col5)>MaxData) {
								MaxData = Math.max(data[i].col5);
							}
							if (Math.max(data[i].col6)>MaxData) {
								MaxData = Math.max(data[i].col6);
							}						  
						  
						}
					  });
					  pyramidChart.invalidateRawData();
					  
					  // Set title					  
					  pyramidChart.titles.getIndex(0).text = currentYear;

					  var MaxLimit = 1.5 * MaxData;
  
					  pyramidXAxisMale.max = MaxLimit;
					  pyramidXAxisFemale.max = MaxLimit;					  
					  
					}

		// An adapter which filters data for the current year
		var currentYear = new Date().getFullYear().toString();
		var sourceData = [];

		var pyramidXAxisMale = pyramidChart.xAxes.push(new am4charts.ValueAxis());
		pyramidXAxisMale.min = 0;
		//pyramidXAxisMale.max = 20000;
		pyramidXAxisMale.strictMinMax = true;

		var pyramidXAxisFemale = pyramidChart.xAxes.push(new am4charts.ValueAxis());
		pyramidXAxisFemale.min = 0;
		//pyramidXAxisFemale.max = 20000;
		pyramidXAxisFemale.renderer.inversed = true;
		pyramidXAxisFemale.strictMinMax = true;


		var label1 = pyramidChart.createChild(am4core.Label);
		label1.text = jslang.text_males;
		label1.fontSize = 20;
		label1.fill = am4core.color("#257fc8");
		label1.isMeasured = false;
		label1.x = am4core.percent(75);
		label1.horizontalCenter = "middle";
		label1.y = 20;

		var label2 = pyramidChart.createChild(am4core.Label);
		label2.text = jslang.text_females;
		label2.fontSize = 20;
		label2.fill = am4core.color("#257fc8");
		label2.isMeasured = false;
		label2.x = am4core.percent(25);
		label2.horizontalCenter = "middle";
		label2.y = 20;


		pyramidChart.bottomAxesContainer.layout = "horizontal";

		var pyramidYAxis = pyramidChart.yAxes.push(new am4charts.CategoryAxis());
		pyramidYAxis.dataFields.category = "col4";
		pyramidYAxis.renderer.minGridDistance = 10;
		pyramidYAxis.renderer.grid.template.location = 0;
		pyramidYAxis.renderer.inside = true;
		pyramidYAxis.title.text = jslang.text_agegroups;


		var pyramidSeriesMale = pyramidChart.series.push(new am4charts.ColumnSeries());
		pyramidSeriesMale.dataFields.categoryY = "col4";
		pyramidSeriesMale.dataFields.valueX = "col5";
		pyramidSeriesMale.tooltipText = "{valueX}";
		pyramidSeriesMale.name = "Male";
		pyramidSeriesMale.xAxis = pyramidXAxisMale;
		pyramidSeriesMale.clustered = false;
		pyramidSeriesMale.columns.template.strokeOpacity = 0;

		var pyramidSeriesFemale = pyramidChart.series.push(new am4charts.ColumnSeries());
		pyramidSeriesFemale.dataFields.categoryY = "col4";
		pyramidSeriesFemale.dataFields.valueX = "col6";
		pyramidSeriesFemale.tooltipText = "{valueX}";
		pyramidSeriesFemale.name = "Female";
		pyramidSeriesFemale.xAxis = pyramidXAxisFemale;
		pyramidSeriesFemale.clustered = false;
		pyramidSeriesFemale.columns.template.strokeOpacity = 0;

		var pyramidTitle = pyramidChart.titles.create();
		pyramidTitle.text = currentYear;
		pyramidTitle.fontSize = 20;
		pyramidTitle.marginBottom = 22;

		var note = pyramidChart.tooltipContainer.createChild(am4core.Label);
		note.html = "<div style='background:white;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		note.fontSize = 14;
		note.valign = "bottom";
		//note.align = "center";


		/**
		* Create population chart
		*/
		var popChart = container.createChild(am4charts.XYChart);
		popChart.marginLeft = 15;
		popChart.data = [{}];

		var popSubtitle = popChart.titles.create();
		popSubtitle.text = jslang.text_popsub;
		popSubtitle.fill = am4core.color("#daa520");

		var popTitle = popChart.titles.create();			
					
		popTitle.text = jslang.text_pop;
		popTitle.fontSize = 20;

		popChart.numberFormatter.numberFormat = "#,###.#a";
		popChart.numberFormatter.bigNumberPrefixes = [
		  { "number": 1e+3, "suffix": "M" }
		];

		popChart.dateFormatter.dateFormat = "yyyy";

		var popXAxis = popChart.xAxes.push(new am4charts.DateAxis());
		popXAxis.renderer.minGridDistance = 40;

		var popYAxis = popChart.yAxes.push(new am4charts.ValueAxis());
		popYAxis.renderer.opposite = true;

		var popSeriesMale = popChart.series.push(new am4charts.LineSeries());
		popSeriesMale.dataFields.dateX = "col3";
		popSeriesMale.dataFields.valueY = "col4";
		popSeriesMale.propertyFields.strokeDasharray = "dash";
		popSeriesMale.propertyFields.fillOpacity = "opacity";
		popSeriesMale.stacked = true;
		popSeriesMale.strokeWidth = 2;
		popSeriesMale.fillOpacity = 0.5;
		popSeriesMale.name = "Male";

		var popSeriesFemale = popChart.series.push(new am4charts.LineSeries());
		popSeriesFemale.dataFields.dateX = "col3";
		popSeriesFemale.dataFields.valueY = "col5";
		popSeriesFemale.propertyFields.strokeDasharray = "dash";
		popSeriesFemale.propertyFields.fillOpacity = "opacity";
		popSeriesFemale.stacked = true;
		popSeriesFemale.strokeWidth = 2;
		popSeriesFemale.fillOpacity = 0.5;
		popSeriesFemale.tooltipText = "[bold]"+jslang.text_popin+" {dateX}[/]\n[font-size: 20]"+jslang.text_male+": {col4}\n"+jslang.text_female+": {col5}";
		popSeriesFemale.name = "Female";

		popChart.dataSource.url = DATA_URL2;
		popChart.dataSource.parser = new am4core.CSVParser();
		popChart.dataSource.parser.options.numberFields = ["col4", "col5", "col6"];
		popChart.dataSource.adapter.add("parsedData", function(data) {
		  am4core.array.each(data, function(item) {
			if (item.col3.getFullYear() == currentYear) {
			  item.dash = "3,3";
			  item.opacity = 0.3;
			}
		  });
		  return data;
		});

		popChart.cursor = new am4charts.XYCursor();
		popChart.snapToSeries = popSeriesFemale;
		popChart.cursor.events.on("cursorpositionchanged", function(ev) {
		currentYear = popXAxis.positionToDate(popXAxis.toAxisPosition(ev.target.xPosition)).getFullYear().toString();
		updateData();
		});

		popChart.cursor.events.on("hidden", function(ev) {
		var currentYear = new Date().getFullYear().toString();
		updateData();
		});
}

function UpdateEmissionsChart(GAS,DOMAIN) {


		DATA_URL = "./data/emissions/emissions_"+CLIMATE_CODE+"_"+GAS+".csv";
			
	
		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create(GAS, am4charts.XYChart);

		chart.exporting.menu = new am4core.ExportMenu();

		// Add data

		chart.data = [{}];	
		chart.dateFormatter.dateFormat = "yyyy";
		
		chart.dateFormatter.inputDateFormat = "yyyy";	
		
		chart.numberFormatter.numberFormat = "#,###.00a";
		chart.numberFormatter.bigNumberPrefixes = [
		   { "number": 1e-9, "suffix": "n" }
		];		
		

		// Create axes
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 45;
		dateAxis.startLocation = 0.5;
		dateAxis.endLocation = 0.5;
		dateAxis.baseInterval = {
		  timeUnit: "year",
		  count: 1
		}		

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.opposite = true;

		// Create series
		var series1 = chart.series.push(new am4charts.LineSeries());
		if (DOMAIN=="agriculture") { series1.dataFields.valueY = "col1"; }
		if (DOMAIN=="energy")      { series1.dataFields.valueY = "col4";  }
		if (DOMAIN=="industry")    { series1.dataFields.valueY = "col5"; }
	    //------------	
		series1.dataFields.dateX = "col0";
		series1.strokeWidth = 1;
		series1.minBulletDistance = 10;
		series1.tooltipText = "[bold]{dateX}[/]\n[font-size: 20] {valueY}";
		series1.fillOpacity = 0.1;
		series1.tooltip.pointerOrientation = "vertical";
		series1.tooltip.background.cornerRadius = 20;
		series1.tooltip.background.fillOpacity = 0.5;
		series1.tooltip.label.padding(12, 12, 12, 12);
		series1.stroke = am4core.color("#46a084"); 
		series1.fill = am4core.color("#46a084"); 
		
			
		var seriesRange1 = dateAxis.createSeriesRange(series1);
		seriesRange1.contents.strokeWidth = 0;
		seriesRange1.contents.fillOpacity = 0;
		

		// Create series
		var series2 = chart.series.push(new am4charts.LineSeries());
	    //------------	
		if (DOMAIN=="agriculture") { series2.dataFields.valueY = "col10"; }
		if (DOMAIN=="energy")      { series2.dataFields.valueY = "col13"; }
		if (DOMAIN=="industry")    { series2.dataFields.valueY = "col14"; }
	    //------------	
		series2.dataFields.dateX = "col0";
		series2.strokeWidth = 0;
		series2.minBulletDistance = 10;
		series2.tooltipText = "{valueY}";
		series2.fillOpacity = 0;
		series2.tooltip.pointerOrientation = "vertical";
		series2.tooltip.background.cornerRadius = 20;
		series2.tooltip.background.fillOpacity = 0.5;
		series2.tooltip.label.padding(12, 12, 12, 12)

		var seriesRange2 = dateAxis.createSeriesRange(series2);
		seriesRange2.contents.strokeWidth = 1;
		seriesRange2.contents.fillOpacity = 0.1;
		seriesRange2.contents.stroke = am4core.color("#dc3545"); 
		seriesRange2.contents.fill = am4core.color("#dc3545");    
	
		
		//chart.cursor = new am4charts.XYCursor();
		//chart.cursor.lineY.opacity = 0;
		// Add scrollbar
		//chart.scrollbarX = new am4core.Scrollbar();
		
		chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series1);
		

		
		var lastTime =  new Date(2100, 0, 0).getTime();

		var lTime = new Date(2098, 0, 0).getTime();
		var ldate = new Date(lTime);

        var sTime = new Date(2007, 0, 0).getTime();
		var sdate = new Date(sTime);

		var mTime = new Date(new Date().getFullYear().toString(), 0, 0).getTime();
		var qTime = mTime + ((lastTime - mTime) / 2);

		var mdate = new Date(mTime);
		var qdate = new Date(qTime);

		// add range
		var range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
		range.grid.stroke = chart.colors.getIndex(0);
		range.grid.strokeOpacity = 1;
		range.bullet = new am4core.ResizeButton();
		range.bullet.background.fill = chart.colors.getIndex(0);
		range.bullet.background.states.copyFrom(chart.zoomOutButton.background.states);
        range.bullet.minX = 0;
		range.bullet.adapter.add("minY", function(minY, target) {
			target.maxY = chart.plotContainer.maxHeight;
			target.maxX = chart.plotContainer.maxWidth;
			return chart.plotContainer.maxHeight;
		})

		range.bullet.events.on("dragged", function() {
			
			range.value = dateAxis.xToValue(range.bullet.pixelX);
			
			seriesRange1.value = range.value;
			seriesRange2.value = range.value;				
				
			if (range.value > ldate) {
				document.getElementById(GAS+"_rcp45").style.display = "block";
				document.getElementById(GAS+"_rcp85").style.display = "none";
			}
			else {
			
				if (range.value < sdate) {
					document.getElementById(GAS+"_rcp45").style.display = "none";
					document.getElementById(GAS+"_rcp85").style.display = "block";										
				}
				else {
					document.getElementById(GAS+"_rcp45").style.display = "none";
					document.getElementById(GAS+"_rcp85").style.display = "none";
				}
			
			}  
  
		})

		range.date = qdate;


		seriesRange1.date = qdate;
		seriesRange1.endDate = new Date(2110, 0, 0);

		seriesRange2.date = qdate;
		seriesRange2.endDate = new Date(2110, 0, 0);
		
			
		chart.dataSource.url = DATA_URL;
		chart.dataSource.parser = new am4core.CSVParser();
		chart.dataSource.parser.options.numberFields = ["col1","col2","col3","col4","col5","col6","col7","col8","col9","col10","col11","col12","col13","col14","col15","col16","col17","col18"];
		chart.dataSource.adapter.add("parsedData", function(data) {
			
			
			var currentYear = new Date().getFullYear().toString();
			
			var gas_per = lang.lang_var_from+" "+
								 data[1].col0.getFullYear().toString()+" "+
								 lang.lang_var_to+" "+currentYear;
			document.getElementById("lang_"+GAS+"_rcp45_per1").innerHTML= gas_per;
			document.getElementById("lang_"+GAS+"_rcp85_per1").innerHTML= gas_per;
			

			var rcp4curCNT = 0;
			var rcp4curSUM = 0;
			var rcp8curCNT = 0;
			var rcp8curSUM = 0;
			//-------
			var rcp4CNT_2050 = 0;
			var rcp4SUM_2050 = 0;
			var rcp4CNT_2100 = 0;
			var rcp4SUM_2100 = 0;
			//-------
			var rcp8CNT_2050 = 0;
			var rcp8SUM_2050 = 0;
			var rcp8CNT_2100 = 0;
			var rcp8SUM_2100 = 0;
			
			var Time2050 =  new Date(2050, 0, 0).getTime();
			
			
			for (var i = 1; i < (data.length - 1); i++) {
				
				var xdate = new Date(data[i].col0.getFullYear().toString(), 0, 0).getTime();
				
				if (xdate > mTime) {
                					
					
					if (xdate > Time2050) {
						
						if (DOMAIN=="agriculture") { 						
							rcp4CNT_2100 += 1;
							rcp4SUM_2100 += data[i].col1; 
							//-------
							rcp8CNT_2100 += 1;
							rcp8SUM_2100 += data[i].col10; 
						}
						if (DOMAIN=="energy") { 						
							rcp4CNT_2100 += 1;
							rcp4SUM_2100 += data[i].col4; 
							//-------
							rcp8CNT_2100 += 1;
							rcp8SUM_2100 += data[i].col13; 
						}
						if (DOMAIN=="industry") { 						
							rcp4CNT_2100 += 1;
							rcp4SUM_2100 += data[i].col5; 
							//-------
							rcp8CNT_2100 += 1;
							rcp8SUM_2100 += data[i].col14; 
						}
						
					}
					else {
						
						if (DOMAIN=="agriculture") { 						
							rcp4CNT_2050 += 1;
							rcp4SUM_2050 += data[i].col1; 
							//-------
							rcp8CNT_2050 += 1;
							rcp8SUM_2050 += data[i].col10; 
						}
						if (DOMAIN=="energy") { 						
							rcp4CNT_2050 += 1;
							rcp4SUM_2050 += data[i].col4; 
							//-------
							rcp8CNT_2050 += 1;
							rcp8SUM_2050 += data[i].col13; 
						}					
						if (DOMAIN=="industry") { 						
							rcp4CNT_2050 += 1;
							rcp4SUM_2050 += data[i].col5; 
							//-------
							rcp8CNT_2050 += 1;
							rcp8SUM_2050 += data[i].col14; 
						}					
						
					}
				 
				}
				else {
					
					if (DOMAIN=="agriculture") { 					
					
						rcp4curCNT += 1;
						rcp4curSUM += data[i].col1; 
						rcp8curCNT += 1;
						rcp8curSUM += data[i].col10; 

					}
					if (DOMAIN=="energy") { 						
					    				
						rcp4curCNT += 1;
						rcp4curSUM += data[i].col4; 
						rcp8curCNT += 1;
						rcp8curSUM += data[i].col13; 

					}
					if (DOMAIN=="industry") { 					
					
						rcp4curCNT += 1;
						rcp4curSUM += data[i].col5; 
						rcp8curCNT += 1;
						rcp8curSUM += data[i].col14; 

					}
					
					
				}
				
			}	
			//-------
			var rcp4curAVG   = (rcp4curSUM / rcp4curCNT);
			var rcp8curAVG   = (rcp8curSUM / rcp8curCNT);
			var rcp4AVG_2050 = (rcp4SUM_2050 / rcp4CNT_2050);
			var rcp8AVG_2050 = (rcp8SUM_2050 / rcp8CNT_2050);
			var rcp4AVG_2100 = (rcp4SUM_2100 / rcp4CNT_2100);
			var rcp8AVG_2100 = (rcp8SUM_2100 / rcp8CNT_2100);
			
			
			if (isNaN(rcp4curAVG)) {
				
				document.getElementById(GAS).style.display = "none";
				document.getElementById("no_"+GAS).style.display = "block";
			}
			else {
				if (isNaN(rcp8curAVG)) {
				
					document.getElementById(GAS).style.display = "none";
					document.getElementById("no_"+GAS).style.display = "block";
				}
				else {
					
				document.getElementById(GAS).style.display = "block";
				document.getElementById("no_"+GAS).style.display = "none";
					
				}
			}
			
			//-------
			document.getElementById("lang_"+GAS+"_rcp45_val1").innerHTML = rcp4curAVG.toExponential(2)+" kg/m<sup>2</sup>/s"; 
			document.getElementById("lang_"+GAS+"_rcp85_val1").innerHTML = rcp8curAVG.toExponential(2)+" kg/m<sup>2</sup>/s"; 
			//-------
			document.getElementById("lang_"+GAS+"_rcp45_val2").innerHTML = rcp4AVG_2050.toExponential(2)+" kg/m<sup>2</sup>/s"; 
			document.getElementById("lang_"+GAS+"_rcp85_val2").innerHTML = rcp8AVG_2050.toExponential(2)+" kg/m<sup>2</sup>/s"; 
			//-------
			document.getElementById("lang_"+GAS+"_rcp45_val3").innerHTML = rcp4AVG_2100.toExponential(2)+" kg/m<sup>2</sup>/s"; 
			document.getElementById("lang_"+GAS+"_rcp85_val3").innerHTML = rcp8AVG_2100.toExponential(2)+" kg/m<sup>2</sup>/s";
			//-------
			document.getElementById(GAS+"_rcp45").style.display = "none";
			document.getElementById(GAS+"_rcp85").style.display = "none";  
			//-------
			return data;
		});			
		
		
		var note = chart.tooltipContainer.createChild(am4core.Label);
		note.html = "<div style='background:white;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		note.fontSize = 14;
        note.valign = "bottom";		

					
}
	

function UpdateTemperatureChart() {		

		DATA_URL = "./data/climatic/clim_"+CLIMATE_CODE+"_temp.csv";

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("clim_temp", am4charts.XYChart);
		
		chart.exporting.menu = new am4core.ExportMenu();

		// Add data

		chart.data = [{}];	
		chart.dateFormatter.dateFormat = "yyyy";

		// Create axes
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 45;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.opposite = true;

		// Create series
		var series1 = chart.series.push(new am4charts.LineSeries());
		series1.dataFields.valueY = "col1";
		series1.dataFields.openValueY = "col2";
		series1.dataFields.dateX = "col0";
		series1.strokeWidth = 1;
		series1.minBulletDistance = 10;
		series1.tooltipText = "[bold]{dateX}[/]\n[font-size: 20] {valueY}";
		series1.fillOpacity = 0.1;
		series1.tooltip.pointerOrientation = "vertical";
		series1.tooltip.background.cornerRadius = 20;
		series1.tooltip.background.fillOpacity = 0.5;
		series1.tooltip.label.padding(12, 12, 12, 12);
		series1.stroke = am4core.color("#0e62bd"); 
		series1.fill = am4core.color("#0e62bd"); 
			
		
		
		var seriesRange1A = dateAxis.createSeriesRange(series1);
		seriesRange1A.contents.strokeWidth = 1;
		seriesRange1A.contents.fillOpacity = 0.1;
		seriesRange1A.contents.stroke = am4core.color("#46a084"); 
		seriesRange1A.contents.fill = am4core.color("#46a084"); 


		var seriesRange1B = dateAxis.createSeriesRange(series1);
		seriesRange1B.contents.strokeWidth = 0;
		seriesRange1B.contents.fillOpacity = 0;
		
		
		
		var series1X = chart.series.push(new am4charts.LineSeries());
		series1X.dataFields.dateX = "col0";
		series1X.dataFields.valueY = "col2";
		series1X.stroke = am4core.color("#0e62bd"); 
		series1X.strokeWidth = 1;
		series1X.fillOpacity = 0;
	
		var seriesRange1XA = dateAxis.createSeriesRange(series1X);
		seriesRange1XA.contents.strokeWidth = 1;
		seriesRange1XA.contents.stroke = am4core.color("#46a084"); 		
		
		var seriesRange1XB = dateAxis.createSeriesRange(series1X);
		seriesRange1XB.contents.strokeWidth = 0;
		seriesRange1XB.contents.fillOpacity = 0;		
		
		

		// Create series
		var series2 = chart.series.push(new am4charts.LineSeries());
		series2.dataFields.valueY = "col3";
		series2.dataFields.openValueY = "col4";		
		series2.dataFields.dateX = "col0";
		series2.strokeWidth = 0;
		series2.minBulletDistance = 10;
		series2.tooltipText = "{valueY}";
		series2.fillOpacity = 0;
		series2.tooltip.pointerOrientation = "vertical";
		series2.tooltip.background.cornerRadius = 20;
		series2.tooltip.background.fillOpacity = 0.5;
		series2.tooltip.label.padding(12, 12, 12, 12)

		var seriesRange2 = dateAxis.createSeriesRange(series2);
		seriesRange2.contents.strokeWidth = 1;
		seriesRange2.contents.fillOpacity = 0.1;
		seriesRange2.contents.stroke = am4core.color("#dc3545"); 
		seriesRange2.contents.fill = am4core.color("#dc3545"); 
	
	
	
		var series2X = chart.series.push(new am4charts.LineSeries());
		series2X.dataFields.dateX = "col0";
		series2X.dataFields.valueY = "col4";
		series2X.stroke = am4core.color("#dc3545"); 
		series2X.strokeWidth = 0;
		series2X.fillOpacity = 0;
	
		var seriesRange2X = dateAxis.createSeriesRange(series2X);
		seriesRange2X.contents.strokeWidth = 1;
		seriesRange2X.contents.stroke = am4core.color("#dc3545"); 
	
	
	
	
		
		//chart.cursor = new am4charts.XYCursor();
		//chart.cursor.lineY.opacity = 0;
		// Add scrollbar
		// chart.scrollbarX = new am4core.Scrollbar();
		chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series1);


		
		var lastTime =  new Date(2100, 0, 0).getTime();

		var lTime = new Date(2098, 0, 0).getTime();
		var ldate = new Date(lTime);

        var sTime = new Date((new Date().getFullYear()+2).toString(), 0, 0).getTime();
		var sdate = new Date(sTime);


		var mTime = new Date(new Date().getFullYear().toString(), 0, 0).getTime();
		var qTime = mTime + ((lastTime - mTime) / 2);

		var mdate = new Date(mTime);
		var qdate = new Date(qTime);

		// add range
		var range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
		range.grid.stroke = chart.colors.getIndex(0);
		range.grid.strokeOpacity = 1;
		range.bullet = new am4core.ResizeButton();
		range.bullet.background.fill = chart.colors.getIndex(0);
		range.bullet.background.states.copyFrom(chart.zoomOutButton.background.states);

		range.bullet.adapter.add("minY", function(minY, target) {
			target.maxY = chart.plotContainer.maxHeight;
			target.maxX = chart.plotContainer.maxWidth;
			return chart.plotContainer.maxHeight;
		})

		range.bullet.events.on("dragged", function() {

			range.bullet.minX = dateAxis.valueToPoint(mTime).x;

			if (dateAxis.xToValue(range.bullet.pixelX) > mdate) { 

				range.value = dateAxis.xToValue(range.bullet.pixelX);

			}  
			else {
				range.value = mdate;
				
			}

			
			if (range.value > ldate) {
					document.getElementById("temp_rcp45").style.display = "block";
					document.getElementById("temp_rcp85").style.display = "none";
			}
			else {
			
				if (range.value < sdate) {
					document.getElementById("temp_rcp45").style.display = "none";
					document.getElementById("temp_rcp85").style.display = "block";										
				}
				else {
					document.getElementById("temp_rcp45").style.display = "none";
					document.getElementById("temp_rcp85").style.display = "none";
				}
			
			}				
			
			
			seriesRange1A.endValue  = range.value;
			seriesRange1XA.endValue  = range.value;
			
			seriesRange1B.value = range.value;
			seriesRange1XB.value = range.value;
			
			seriesRange2.value = range.value;
			seriesRange2X.value = range.value;
  
		})

		range.date = qdate;


		seriesRange1A.date = mdate;
		seriesRange1A.endDate = qdate;
		
		seriesRange1XA.date = mdate;
		seriesRange1XA.endDate = qdate;

		seriesRange1B.date = qdate;
		seriesRange1B.endDate = new Date(2100, 0, 0);

		seriesRange1XB.date = qdate;
		seriesRange1XB.endDate = new Date(2100, 0, 0);


		seriesRange2.date = qdate;
		seriesRange2.endDate = new Date(2100, 0, 0);

		seriesRange2X.date = qdate;
		seriesRange2X.endDate = new Date(2100, 0, 0);

	
		chart.dataSource.url = DATA_URL;
		chart.dataSource.parser = new am4core.CSVParser();
		chart.dataSource.parser.options.numberFields = ["col"];
		chart.dataSource.adapter.add("parsedData", function(data) {

			
			
			var currentYear = new Date().getFullYear().toString();
			
			var clim_temp_per1 = lang.lang_var_from+" "+
								 data[1].col0.getFullYear().toString()+" "+
								 lang.lang_var_to+" "+currentYear;
			document.getElementById("lang_clim_temp_per1").innerHTML= clim_temp_per1;
			

			var curCNT = 0;
			var curSUM = 0;
			//-------
			var rcp4CNT_2050 = 0;
			var rcp4SUM_2050 = 0;
			var rcp4CNT_2100 = 0;
			var rcp4SUM_2100 = 0;
			//-------
			var rcp8CNT_2050 = 0;
			var rcp8SUM_2050 = 0;
			var rcp8CNT_2100 = 0;
			var rcp8SUM_2100 = 0;
			//-------
			var curMAX = 0;
			var curMIN = 10000;
			//-------
			var rcp4MAX = 0;
			var rcp4MIN = 10000;
			//-------
			var rcp8MAX = 0;
			var rcp8MIN = 10000;
			//-------
			
			var Time2050 =  new Date(2050, 0, 0).getTime();
			
			for (var i = 1; i < (data.length - 1); i++) {
				
				var xdate = new Date(data[i].col0.getFullYear().toString(), 0, 0).getTime();
				
				if (xdate > mTime) {
                					
					if (rcp4MAX < data[i].col1) { rcp4MAX = data[i].col1; }
					if (rcp4MIN > data[i].col2) { rcp4MIN = data[i].col2; }
                    //-------
					if (rcp8MAX < data[i].col3) { rcp8MAX = data[i].col3; }
					if (rcp8MIN > data[i].col4) { rcp8MIN = data[i].col4; }
					//-------
					if (xdate > Time2050) {
						rcp4CNT_2100 += 2;
						rcp4SUM_2100 += data[i].col1 + data[i].col2; 
						//-------
						rcp8CNT_2100 += 2;
						rcp8SUM_2100 += data[i].col3 + data[i].col4; 
					}
					else {
						rcp4CNT_2050 += 2;
						rcp4SUM_2050 += data[i].col1 + data[i].col2; 
						//-------
						rcp8CNT_2050 += 2;
						rcp8SUM_2050 += data[i].col3 + data[i].col4; 
					}
				 
				}
				else {
					curCNT += 2;
					curSUM += data[i].col1 + data[i].col2; 
					
					if (curMAX < data[i].col1) { curMAX = data[i].col1; }
					if (curMIN > data[i].col2) { curMIN = data[i].col2; }
					
					
				}
				
			}	
			//-------
			var curAVG  = (curSUM / curCNT);
			//-------
			var clim_temp_val1 = curAVG.toFixed(2)+" <sup>o</sup>C"; 
			document.getElementById("lang_clim_temp_val1").innerHTML= clim_temp_val1;  
			//-------
			var rcp4AVG_2050 = (rcp4SUM_2050 / rcp4CNT_2050);
			var rcp8AVG_2050 = (rcp8SUM_2050 / rcp8CNT_2050);
			var rcp4AVG_2100 = (rcp4SUM_2100 / rcp4CNT_2100);
			var rcp8AVG_2100 = (rcp8SUM_2100 / rcp8CNT_2100);
			//-------
			var max2050 = Math.max(rcp4AVG_2050,rcp8AVG_2050);
			var midAVG2050 = (rcp4AVG_2050 + rcp8AVG_2050) / 2;
			var per2050 = 100 * Math.abs((max2050-midAVG2050) / midAVG2050);
            var clim_temp_val2 = midAVG2050.toFixed(2)+" <sup>o</sup>C +/- "+ per2050.toFixed(1)+"%";
			//-------
			document.getElementById("lang_clim_temp_val2").innerHTML= clim_temp_val2;   
			//-------
			var max2100 = Math.max(rcp4AVG_2100,rcp8AVG_2100);
			var midAVG2100 = (rcp4AVG_2100 + rcp8AVG_2100) / 2;
			var per2100 = 100 * Math.abs((max2100-midAVG2100) / midAVG2100);
            var clim_temp_val3 = midAVG2100.toFixed(2)+" <sup>o</sup>C +/- "+ per2100.toFixed(1)+"%";
			//-------
			document.getElementById("lang_clim_temp_val3").innerHTML= clim_temp_val3;   
			//-------
			document.getElementById("lang_clim_temp_rcp45_min").innerHTML= "MIN = "+rcp4MIN.toFixed(2)+" <sup>o</sup>C";   
			document.getElementById("lang_clim_temp_rcp45_max").innerHTML= "MAX = "+rcp4MAX.toFixed(2)+" <sup>o</sup>C";
			//-------
			document.getElementById("lang_clim_temp_rcp85_min").innerHTML= "MIN = "+rcp8MIN.toFixed(2)+" <sup>o</sup>C";   
			document.getElementById("lang_clim_temp_rcp85_max").innerHTML= "MAX = "+rcp8MAX.toFixed(2)+" <sup>o</sup>C";
			//-------
			document.getElementById("lang_clim_temp_rcp45_min_msg").innerHTML="";
			document.getElementById("lang_clim_temp_rcp85_min_msg").innerHTML="";
			document.getElementById("lang_clim_temp_rcp45_max_msg").innerHTML="";
			document.getElementById("lang_clim_temp_rcp85_max_msg").innerHTML="";
			//-------
			if (rcp4MIN<curMIN) {
				if (rcp8MIN<curMIN) {

                    alert(curMIN);
					
					if (rcp4MIN<rcp8MIN) {
						document.getElementById("lang_clim_temp_rcp45_min_msg").innerHTML= "<div style='color: red;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";						
						document.getElementById("lang_clim_temp_rcp85_min_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";					
					}
					else {
						document.getElementById("lang_clim_temp_rcp45_min_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";						
						document.getElementById("lang_clim_temp_rcp85_min_msg").innerHTML= "<div style='color: red;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";											
					}
				}
				else {
					document.getElementById("lang_clim_temp_rcp45_min_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";
				}
			}
			else {
				if (rcp8MIN<curMIN) { 
					document.getElementById("lang_clim_temp_rcp85_min_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";
				}
			}
			//-------            
			if (rcp4MAX>curMAX) {
				if (rcp8MAX>curMAX) { 
					if (rcp4MAX>rcp8MAX) {
						document.getElementById("lang_clim_temp_rcp45_max_msg").innerHTML= "<div style='color: red;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";						
						document.getElementById("lang_clim_temp_rcp85_max_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";					
					}
					else {
						document.getElementById("lang_clim_temp_rcp45_max_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";						
						document.getElementById("lang_clim_temp_rcp85_max_msg").innerHTML= "<div style='color: red;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";											
					}
				}
				else {
					document.getElementById("lang_clim_temp_rcp45_max_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";
				}
			}
			else {
				if (rcp8MAX>curMAX) { 
					document.getElementById("lang_clim_temp_rcp85_max_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";
				}
			}			
			//-------
			document.getElementById("temp_rcp45").style.display = "none";
			document.getElementById("temp_rcp85").style.display = "none";
			//-------
			return data;
		});	
					
					
		var note = chart.tooltipContainer.createChild(am4core.Label);
		note.html = "<div style='background:white;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		note.fontSize = 14;
        note.valign = "bottom";	
					
}

function UpdatePrecipitationChart() {
			
			
		DATA_URL = "./data/climatic/clim_"+CLIMATE_CODE+"_prec.csv";	
		
			
		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("clim_prec", am4charts.XYChart);

		chart.exporting.menu = new am4core.ExportMenu();

		// Add data

		chart.data = [{}];	
		chart.dateFormatter.dateFormat = "yyyy";

		// Create axes
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 45;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.opposite = true;

		// Create series
		var series1 = chart.series.push(new am4charts.LineSeries());
		series1.dataFields.valueY = "col1";
		series1.dataFields.dateX = "col0";
		series1.strokeWidth = 1;
		series1.minBulletDistance = 10;
		series1.tooltipText = "[bold]{dateX}[/]\n[font-size: 20] {valueY}";
		series1.fillOpacity = 0.1;
		series1.tooltip.pointerOrientation = "vertical";
		series1.tooltip.background.cornerRadius = 20;
		series1.tooltip.background.fillOpacity = 0.5;
		series1.tooltip.label.padding(12, 12, 12, 12);
		series1.stroke = am4core.color("#0e62bd"); 
		series1.fill = am4core.color("#0e62bd"); 
			
		
		
		var seriesRange1A = dateAxis.createSeriesRange(series1);
		seriesRange1A.contents.strokeWidth = 1;
		seriesRange1A.contents.fillOpacity = 0.1;
		seriesRange1A.contents.stroke = am4core.color("#46a084"); 
		seriesRange1A.contents.fill = am4core.color("#46a084"); 


		var seriesRange1B = dateAxis.createSeriesRange(series1);
		seriesRange1B.contents.strokeWidth = 0;
		seriesRange1B.contents.fillOpacity = 0;
		

		// Create series
		var series2 = chart.series.push(new am4charts.LineSeries());
		series2.dataFields.valueY = "col2";
		series2.dataFields.dateX = "col0";
		series2.strokeWidth = 0;
		series2.minBulletDistance = 10;
		series2.tooltipText = "{valueY}";
		series2.fillOpacity = 0;
		series2.tooltip.pointerOrientation = "vertical";
		series2.tooltip.background.cornerRadius = 20;
		series2.tooltip.background.fillOpacity = 0.5;
		series2.tooltip.label.padding(12, 12, 12, 12)

		var seriesRange2 = dateAxis.createSeriesRange(series2);
		seriesRange2.contents.strokeWidth = 1;
		seriesRange2.contents.fillOpacity = 0.1;
		seriesRange2.contents.stroke = am4core.color("#dc3545"); 
		seriesRange2.contents.fill = am4core.color("#dc3545"); 
	
		
		//chart.cursor = new am4charts.XYCursor();
		//chart.cursor.lineY.opacity = 0;
		// Add scrollbar
		//chart.scrollbarX = new am4core.Scrollbar();
		
		chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series1);
		

		
		var lastTime =  new Date(2100, 0, 0).getTime();

		var lTime = new Date(2098, 0, 0).getTime();
		var ldate = new Date(lTime);
		
        var sTime = new Date((new Date().getFullYear()+2).toString(), 0, 0).getTime();
		var sdate = new Date(sTime);		


		var mTime = new Date(new Date().getFullYear().toString(), 0, 0).getTime();
		var qTime = mTime + ((lastTime - mTime) / 2);

		var mdate = new Date(mTime);
		var qdate = new Date(qTime);

		// add range
		var range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
		range.grid.stroke = chart.colors.getIndex(0);
		range.grid.strokeOpacity = 1;
		range.bullet = new am4core.ResizeButton();
		range.bullet.background.fill = chart.colors.getIndex(0);
		range.bullet.background.states.copyFrom(chart.zoomOutButton.background.states);

		range.bullet.adapter.add("minY", function(minY, target) {
			target.maxY = chart.plotContainer.maxHeight;
			target.maxX = chart.plotContainer.maxWidth;
			return chart.plotContainer.maxHeight;
		})

		range.bullet.events.on("dragged", function() {

			range.bullet.minX = dateAxis.valueToPoint(mTime).x;

			if (dateAxis.xToValue(range.bullet.pixelX) > mdate) { 

				range.value = dateAxis.xToValue(range.bullet.pixelX);
				
			}  
			else {

				range.value = mdate;
			}

			
			if (range.value > ldate) {
					document.getElementById("prec_rcp45").style.display = "block";
					document.getElementById("prec_rcp85").style.display = "none";
			}
			else {
			
				if (range.value < sdate) {
					document.getElementById("prec_rcp45").style.display = "none";
					document.getElementById("prec_rcp85").style.display = "block";										
				}
				else {
					document.getElementById("prec_rcp45").style.display = "none";
					document.getElementById("prec_rcp85").style.display = "none";
				}
			
			}			
			
			
			
			seriesRange1A.endValue  = range.value;
			seriesRange1B.value = range.value;
			seriesRange2.value = range.value;
  
		})

		range.date = qdate;


		seriesRange1A.date = mdate;
		seriesRange1A.endDate = qdate;

		seriesRange1B.date = qdate;
		seriesRange1B.endDate = new Date(2100, 0, 0);

		seriesRange2.date = qdate;
		seriesRange2.endDate = new Date(2100, 0, 0);
		
			
		chart.dataSource.url = DATA_URL;
		chart.dataSource.parser = new am4core.CSVParser();
		chart.dataSource.parser.options.numberFields = ["col"];
		chart.dataSource.adapter.add("parsedData", function(data) {
			
			
			
			var currentYear = new Date().getFullYear().toString();
			
			var clim_prec_per1 = lang.lang_var_from+" "+
								 data[1].col0.getFullYear().toString()+" "+
								 lang.lang_var_to+" "+currentYear;
			document.getElementById("lang_clim_prec_per1").innerHTML= clim_prec_per1;
			

			var curCNT = 0;
			var curSUM = 0;
			//-------
			var rcp4CNT_2050 = 0;
			var rcp4SUM_2050 = 0;
			var rcp4CNT_2100 = 0;
			var rcp4SUM_2100 = 0;
			//-------
			var rcp8CNT_2050 = 0;
			var rcp8SUM_2050 = 0;
			var rcp8CNT_2100 = 0;
			var rcp8SUM_2100 = 0;
			//-------
			var curMAX = 0;
			var curMIN = 10000;
			//-------
			var rcp4MAX = 0;
			var rcp4MIN = 10000;
			//-------
			var rcp8MAX = 0;
			var rcp8MIN = 10000;
			//-------
			
			var Time2050 =  new Date(2050, 0, 0).getTime();
			
			for (var i = 1; i < (data.length - 1); i++) {
				
				var xdate = new Date(data[i].col0.getFullYear().toString(), 0, 0).getTime();
				
				if (xdate > mTime) {
                					
					if (rcp4MAX < data[i].col1) { rcp4MAX = data[i].col1; }
					if (rcp4MIN > data[i].col1) { rcp4MIN = data[i].col1; }
                    //-------
					if (rcp8MAX < data[i].col2) { rcp8MAX = data[i].col2; }
					if (rcp8MIN > data[i].col2) { rcp8MIN = data[i].col2; }
					//-------
					
					if (xdate > Time2050) {
						rcp4CNT_2100 += 1;
						rcp4SUM_2100 += data[i].col1; 
						//-------
						rcp8CNT_2100 += 1;
						rcp8SUM_2100 += data[i].col2; 
					}
					else {
						rcp4CNT_2050 += 1;
						rcp4SUM_2050 += data[i].col1; 
						//-------
						rcp8CNT_2050 += 1;
						rcp8SUM_2050 += data[i].col2; 
					}
				 
				}
				else {
					curCNT += 1;
					curSUM += data[i].col1; 
					
					if (curMAX < data[i].col1) { curMAX = data[i].col1; }
					if (curMIN > data[i].col1) { curMIN = data[i].col1; }
					
					
				}
				
			}	
			//-------
			var curAVG  = (curSUM / curCNT);
			//-------
			var clim_prec_val1 = curAVG.toFixed(2)+" mm"; 
			document.getElementById("lang_clim_prec_val1").innerHTML= clim_prec_val1;  
			//-------
			var rcp4AVG_2050 = (rcp4SUM_2050 / rcp4CNT_2050);
			var rcp8AVG_2050 = (rcp8SUM_2050 / rcp8CNT_2050);
			var rcp4AVG_2100 = (rcp4SUM_2100 / rcp4CNT_2100);
			var rcp8AVG_2100 = (rcp8SUM_2100 / rcp8CNT_2100);
			//-------
			var max2050 = Math.max(rcp4AVG_2050,rcp8AVG_2050);
			var midAVG2050 = (rcp4AVG_2050 + rcp8AVG_2050) / 2;
			var per2050 = 100 * Math.abs((max2050-midAVG2050) / midAVG2050);
            var clim_prec_val2 = midAVG2050.toFixed(2)+" mm +/- "+ per2050.toFixed(1)+"%";
			//-------
			document.getElementById("lang_clim_prec_val2").innerHTML= clim_prec_val2;   
			//-------
			var max2100 = Math.max(rcp4AVG_2100,rcp8AVG_2100);
			var midAVG2100 = (rcp4AVG_2100 + rcp8AVG_2100) / 2;
			var per2100 = 100 * Math.abs((max2100-midAVG2100) / midAVG2100);
            var clim_prec_val3 = midAVG2100.toFixed(2)+" mm +/- "+ per2100.toFixed(1)+"%";
			//-------
			document.getElementById("lang_clim_prec_val3").innerHTML= clim_prec_val3;   
			//-------
			document.getElementById("lang_clim_prec_rcp45_min").innerHTML= "MIN = "+rcp4MIN.toFixed(2)+" mm";   
			document.getElementById("lang_clim_prec_rcp45_max").innerHTML= "MAX = "+rcp4MAX.toFixed(2)+" mm";
			//-------
			document.getElementById("lang_clim_prec_rcp85_min").innerHTML= "MIN = "+rcp8MIN.toFixed(2)+" mm";   
			document.getElementById("lang_clim_prec_rcp85_max").innerHTML= "MAX = "+rcp8MAX.toFixed(2)+" mm";
			//-------
			document.getElementById("lang_clim_prec_rcp45_min_msg").innerHTML="";
			document.getElementById("lang_clim_prec_rcp85_min_msg").innerHTML="";
			document.getElementById("lang_clim_prec_rcp45_max_msg").innerHTML="";
			document.getElementById("lang_clim_prec_rcp85_max_msg").innerHTML="";
			//-------
			if (rcp4MIN<curMIN) {
				if (rcp8MIN<curMIN) { 
					if (rcp4MIN<rcp8MIN) {
						document.getElementById("lang_clim_prec_rcp45_min_msg").innerHTML= "<div style='color: red;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";						
						document.getElementById("lang_clim_prec_rcp85_min_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";					
					}
					else {
						document.getElementById("lang_clim_prec_rcp45_min_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";						
						document.getElementById("lang_clim_prec_rcp85_min_msg").innerHTML= "<div style='color: red;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";											
					}
				}
				else {
					document.getElementById("lang_clim_prec_rcp45_min_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";
				}
			}
			else {
				if (rcp8MIN<curMIN) { 
					document.getElementById("lang_clim_prec_rcp85_min_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_min_warning_msg+"</span></div>";
				}
			}
			//-------            
			if (rcp4MAX>curMAX) {
				if (rcp8MAX>curMAX) { 
					if (rcp4MAX>rcp8MAX) {
						document.getElementById("lang_clim_prec_rcp45_max_msg").innerHTML= "<div style='color: red;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";						
						document.getElementById("lang_clim_prec_rcp85_max_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";					
					}
					else {
						document.getElementById("lang_clim_prec_rcp45_max_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";						
						document.getElementById("lang_clim_prec_rcp85_max_msg").innerHTML= "<div style='color: red;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";											
					}
				}
				else {
					document.getElementById("lang_clim_prec_rcp45_max_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";
				}
			}
			else {
				if (rcp8MAX>curMAX) { 
					document.getElementById("lang_clim_prec_rcp85_max_msg").innerHTML= "<div style='color: orange;'><i class='far fa-exclamation-triangle' aria-hidden='true'></i> <span>"+lang.lang_max_warning_msg+"</span></div>";
				}
			}			
			//-------
			document.getElementById("prec_rcp45").style.display = "none";
			document.getElementById("prec_rcp85").style.display = "none";
			//-------
			
			return data;
		});			
		
		var note = chart.tooltipContainer.createChild(am4core.Label);
		note.html = "<div style='background:white;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		note.fontSize = 14;
        note.valign = "bottom";		
		
			
}

function UpdateSMIchart() {
			
			
		DATA_URL = "./data/indices/idx_"+CLIMATE_CODE+"_smi.csv";
			
		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("smi", am4charts.XYChart);

		chart.exporting.menu = new am4core.ExportMenu();

		// Add data

		chart.data = [{}];	
		chart.dateFormatter.dateFormat = "yyyy";

		// Create axes
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 45;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.opposite = true;

		// Create series
		var series1 = chart.series.push(new am4charts.LineSeries());
		series1.dataFields.valueY = "col1";
		series1.dataFields.dateX = "col0";
		series1.strokeWidth = 1;
		series1.minBulletDistance = 10;
		series1.tooltipText = "[bold]{dateX}[/]\n[font-size: 20] {valueY}";
		series1.fillOpacity = 0.1;
		series1.tooltip.pointerOrientation = "vertical";
		series1.tooltip.background.cornerRadius = 20;
		series1.tooltip.background.fillOpacity = 0.5;
		series1.tooltip.label.padding(12, 12, 12, 12);
		series1.stroke = am4core.color("#0e62bd"); 
		series1.fill = am4core.color("#0e62bd"); 
			
		
		
		var seriesRange1A = dateAxis.createSeriesRange(series1);
		seriesRange1A.contents.strokeWidth = 1;
		seriesRange1A.contents.fillOpacity = 0.1;
		seriesRange1A.contents.stroke = am4core.color("#46a084"); 
		seriesRange1A.contents.fill = am4core.color("#46a084"); 


		var seriesRange1B = dateAxis.createSeriesRange(series1);
		seriesRange1B.contents.strokeWidth = 0;
		seriesRange1B.contents.fillOpacity = 0;
		

		// Create series
		var series2 = chart.series.push(new am4charts.LineSeries());
		series2.dataFields.valueY = "col2";
		series2.dataFields.dateX = "col0";
		series2.strokeWidth = 0;
		series2.minBulletDistance = 10;
		series2.tooltipText = "{valueY}";
		series2.fillOpacity = 0;
		series2.tooltip.pointerOrientation = "vertical";
		series2.tooltip.background.cornerRadius = 20;
		series2.tooltip.background.fillOpacity = 0.5;
		series2.tooltip.label.padding(12, 12, 12, 12)

		var seriesRange2 = dateAxis.createSeriesRange(series2);
		seriesRange2.contents.strokeWidth = 1;
		seriesRange2.contents.fillOpacity = 0.1;
		seriesRange2.contents.stroke = am4core.color("#dc3545"); 
		seriesRange2.contents.fill = am4core.color("#dc3545"); 
	
		
		//chart.cursor = new am4charts.XYCursor();
		//chart.cursor.lineY.opacity = 0;
		// Add scrollbar
		//chart.scrollbarX = new am4core.Scrollbar();
		
		chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series1);
		

		
		var lastTime =  new Date(2100, 0, 0).getTime();

		var lTime = new Date(2098, 0, 0).getTime();
		var ldate = new Date(lTime);

        var sTime = new Date((new Date().getFullYear()+2).toString(), 0, 0).getTime();
		var sdate = new Date(sTime);

		var mTime = new Date(new Date().getFullYear().toString(), 0, 0).getTime();
		var qTime = mTime + ((lastTime - mTime) / 2);

		var mdate = new Date(mTime);
		var qdate = new Date(qTime);

		// add range
		var range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
		range.grid.stroke = chart.colors.getIndex(0);
		range.grid.strokeOpacity = 1;
		range.bullet = new am4core.ResizeButton();
		range.bullet.background.fill = chart.colors.getIndex(0);
		range.bullet.background.states.copyFrom(chart.zoomOutButton.background.states);

		range.bullet.adapter.add("minY", function(minY, target) {
			target.maxY = chart.plotContainer.maxHeight;
			target.maxX = chart.plotContainer.maxWidth;
			return chart.plotContainer.maxHeight;
		})

		range.bullet.events.on("dragged", function() {

			range.bullet.minX = dateAxis.valueToPoint(mTime).x;

			if (dateAxis.xToValue(range.bullet.pixelX) > mdate) { 

				range.value = dateAxis.xToValue(range.bullet.pixelX);
				
			}  
			else {

				range.value = mdate;
				
			}
			
			
			if (range.value > ldate) {
					document.getElementById("smi_rcp45").style.display = "block";
					document.getElementById("smi_rcp85").style.display = "none";
			}
			else {
			
				if (range.value < sdate) {
					document.getElementById("smi_rcp45").style.display = "none";
					document.getElementById("smi_rcp85").style.display = "block";										
				}
				else {
					document.getElementById("smi_rcp45").style.display = "none";
					document.getElementById("smi_rcp85").style.display = "none";
				}
			
			}			
			
			
			seriesRange1A.endValue  = range.value;
			seriesRange1B.value = range.value;
			seriesRange2.value = range.value;
  
		})

		range.date = qdate;


		seriesRange1A.date = mdate;
		seriesRange1A.endDate = qdate;

		seriesRange1B.date = qdate;
		seriesRange1B.endDate = new Date(2100, 0, 0);

		seriesRange2.date = qdate;
		seriesRange2.endDate = new Date(2100, 0, 0);
		
			
		chart.dataSource.url = DATA_URL;
		chart.dataSource.parser = new am4core.CSVParser();
		chart.dataSource.parser.options.numberFields = ["col"];
		chart.dataSource.adapter.add("parsedData", function(data) {
			
			
			
			var currentYear = new Date().getFullYear().toString();
			
			var endYear = data[data.length - 1].col0.getFullYear().toString();
			
			if (endYear < currentYear) {
				
				currentYear = endYear;
			}
			
			
			var clim_prec_per1 = lang.lang_var_from+" "+
								 data[1].col0.getFullYear().toString()+" "+
								 lang.lang_var_to+" "+currentYear;
			document.getElementById("lang_smi_per1").innerHTML= clim_prec_per1;
			

			var curCNT = 0;
			var curSUM = 0;
			//-------
			var rcp4CNT_2050 = 0;
			var rcp4SUM_2050 = 0;
			var rcp4CNT_2100 = 0;
			var rcp4SUM_2100 = 0;
			//-------
			var rcp8CNT_2050 = 0;
			var rcp8SUM_2050 = 0;
			var rcp8CNT_2100 = 0;
			var rcp8SUM_2100 = 0;
			//-------			
			var Time2050 =  new Date(2050, 0, 0).getTime();
			
			for (var i = 1; i < (data.length - 1); i++) {
				
				var xdate = new Date(data[i].col0.getFullYear().toString(), 0, 0).getTime();
				
				if (xdate > mTime) {
					
					if (xdate > Time2050) {
						rcp4CNT_2100 += 1;
						rcp4SUM_2100 += data[i].col1; 
						//-------
						rcp8CNT_2100 += 1;
						rcp8SUM_2100 += data[i].col2; 
					}
					else {
						rcp4CNT_2050 += 1;
						rcp4SUM_2050 += data[i].col1; 
						//-------
						rcp8CNT_2050 += 1;
						rcp8SUM_2050 += data[i].col2; 
					}
				 
				}
				else {
					curCNT += 1;
					curSUM += data[i].col1; 
					
				}
				
			}	
			//-------
			var curAVG  = (curSUM / curCNT);
			//-------			
			document.getElementById("lang_smi_val1").innerHTML= curAVG.toFixed(2);
			//-------
			var rcp4AVG_2050 = (rcp4SUM_2050 / rcp4CNT_2050);
			var rcp8AVG_2050 = (rcp8SUM_2050 / rcp8CNT_2050);
			var rcp4AVG_2100 = (rcp4SUM_2100 / rcp4CNT_2100);
			var rcp8AVG_2100 = (rcp8SUM_2100 / rcp8CNT_2100);
			//-------
			document.getElementById("lang_smi_rcp45_val2").innerHTML = rcp4AVG_2050.toFixed(2);
			document.getElementById("lang_smi_rcp85_val2").innerHTML = rcp8AVG_2050.toFixed(2);
			//-------
			document.getElementById("lang_smi_rcp45_val3").innerHTML = rcp4AVG_2100.toFixed(2);
			document.getElementById("lang_smi_rcp85_val3").innerHTML = rcp8AVG_2100.toFixed(2);
			//-------
			document.getElementById("smi_rcp45").style.display = "none";
			document.getElementById("smi_rcp85").style.display = "none";  
			//-------
			
			return data;
		});			
		
		var note = chart.tooltipContainer.createChild(am4core.Label);
		note.html = "<div style='background:white;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		note.fontSize = 14;
        note.valign = "bottom";		

			
}  

function UpdateNDVIchart() {
			
		DATA_URL = "./data/indices/idx_"+CLIMATE_CODE+"_ndvi.csv";
			
		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("ndvi", am4charts.XYChart);

		chart.exporting.menu = new am4core.ExportMenu();

		// Add data

		chart.data = [{}];	
		chart.dateFormatter.dateFormat = "yyyy";

		// Create axes
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 45;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.opposite = true;

		// Create series
		var series1 = chart.series.push(new am4charts.LineSeries());
		series1.dataFields.valueY = "col1";
		series1.dataFields.dateX = "col0";
		series1.strokeWidth = 1;
		series1.minBulletDistance = 10;
		series1.tooltipText = "[bold]{dateX}[/]\n[font-size: 20] {valueY}";
		series1.fillOpacity = 0.1;
		series1.tooltip.pointerOrientation = "vertical";
		series1.tooltip.background.cornerRadius = 20;
		series1.tooltip.background.fillOpacity = 0.5;
		series1.tooltip.label.padding(12, 12, 12, 12);
		series1.stroke = am4core.color("#0e62bd"); 
		series1.fill = am4core.color("#0e62bd"); 
			
		
		
		var seriesRange1A = dateAxis.createSeriesRange(series1);
		seriesRange1A.contents.strokeWidth = 1;
		seriesRange1A.contents.fillOpacity = 0.1;
		seriesRange1A.contents.stroke = am4core.color("#46a084"); 
		seriesRange1A.contents.fill = am4core.color("#46a084"); 


		var seriesRange1B = dateAxis.createSeriesRange(series1);
		seriesRange1B.contents.strokeWidth = 0;
		seriesRange1B.contents.fillOpacity = 0;
		

		// Create series
		var series2 = chart.series.push(new am4charts.LineSeries());
		series2.dataFields.valueY = "col2";
		series2.dataFields.dateX = "col0";
		series2.strokeWidth = 0;
		series2.minBulletDistance = 10;
		series2.tooltipText = "{valueY}";
		series2.fillOpacity = 0;
		series2.tooltip.pointerOrientation = "vertical";
		series2.tooltip.background.cornerRadius = 20;
		series2.tooltip.background.fillOpacity = 0.5;
		series2.tooltip.label.padding(12, 12, 12, 12)

		var seriesRange2 = dateAxis.createSeriesRange(series2);
		seriesRange2.contents.strokeWidth = 1;
		seriesRange2.contents.fillOpacity = 0.1;
		seriesRange2.contents.stroke = am4core.color("#dc3545"); 
		seriesRange2.contents.fill = am4core.color("#dc3545"); 
	
		
		//chart.cursor = new am4charts.XYCursor();
		//chart.cursor.lineY.opacity = 0;
		// Add scrollbar
		//chart.scrollbarX = new am4core.Scrollbar();
		
		chart.scrollbarX = new am4charts.XYChartScrollbar();
        chart.scrollbarX.series.push(series1);
		

		
		var lastTime =  new Date(2100, 0, 0).getTime();

		var lTime = new Date(2098, 0, 0).getTime();
		var ldate = new Date(lTime);

        var sTime = new Date((new Date().getFullYear()+2).toString(), 0, 0).getTime();
		var sdate = new Date(sTime);

		var mTime = new Date(new Date().getFullYear().toString(), 0, 0).getTime();
		var qTime = mTime + ((lastTime - mTime) / 2);

		var mdate = new Date(mTime);
		var qdate = new Date(qTime);

		// add range
		var range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
		range.grid.stroke = chart.colors.getIndex(0);
		range.grid.strokeOpacity = 1;
		range.bullet = new am4core.ResizeButton();
		range.bullet.background.fill = chart.colors.getIndex(0);
		range.bullet.background.states.copyFrom(chart.zoomOutButton.background.states);

		range.bullet.adapter.add("minY", function(minY, target) {
			target.maxY = chart.plotContainer.maxHeight;
			target.maxX = chart.plotContainer.maxWidth;
			return chart.plotContainer.maxHeight;
		})

		range.bullet.events.on("dragged", function() {

			range.bullet.minX = dateAxis.valueToPoint(mTime).x;

			if (dateAxis.xToValue(range.bullet.pixelX) > mdate) { 

				range.value = dateAxis.xToValue(range.bullet.pixelX);
				
			}  
			else {

				range.value = mdate;
				
			}
			
			
			if (range.value > ldate) {
					document.getElementById("ndvi_rcp45").style.display = "block";
					document.getElementById("ndvi_rcp85").style.display = "none";
			}
			else {
			
				if (range.value < sdate) {
					document.getElementById("ndvi_rcp45").style.display = "none";
					document.getElementById("ndvi_rcp85").style.display = "block";										
				}
				else {
					document.getElementById("ndvi_rcp45").style.display = "none";
					document.getElementById("ndvi_rcp85").style.display = "none";
				}
			
			}				
			
			
			seriesRange1A.endValue  = range.value;
			seriesRange1B.value = range.value;
			seriesRange2.value = range.value;
  
		})

		range.date = qdate;


		seriesRange1A.date = mdate;
		seriesRange1A.endDate = qdate;

		seriesRange1B.date = qdate;
		seriesRange1B.endDate = new Date(2100, 0, 0);

		seriesRange2.date = qdate;
		seriesRange2.endDate = new Date(2100, 0, 0);
		
			
		chart.dataSource.url = DATA_URL;
		chart.dataSource.parser = new am4core.CSVParser();
		chart.dataSource.parser.options.numberFields = ["col"];
		chart.dataSource.adapter.add("parsedData", function(data) {
			
			
			
			var currentYear = new Date().getFullYear().toString();
			
			var endYear = data[data.length - 1].col0.getFullYear().toString();
			
			if (endYear < currentYear) {
				
				currentYear = endYear;
			}
			
			
			var clim_prec_per1 = lang.lang_var_from+" "+
								 data[1].col0.getFullYear().toString()+" "+
								 lang.lang_var_to+" "+currentYear;
			document.getElementById("lang_ndvi_per1").innerHTML= clim_prec_per1;
			

			var curCNT = 0;
			var curSUM = 0;
			//-------
			var rcp4CNT_2050 = 0;
			var rcp4SUM_2050 = 0;
			var rcp4CNT_2100 = 0;
			var rcp4SUM_2100 = 0;
			//-------
			var rcp8CNT_2050 = 0;
			var rcp8SUM_2050 = 0;
			var rcp8CNT_2100 = 0;
			var rcp8SUM_2100 = 0;
			//-------			
			var Time2050 =  new Date(2050, 0, 0).getTime();
			
			for (var i = 1; i < (data.length - 1); i++) {
				
				var xdate = new Date(data[i].col0.getFullYear().toString(), 0, 0).getTime();
				
				if (xdate > mTime) {
					
					if (xdate > Time2050) {
						rcp4CNT_2100 += 1;
						rcp4SUM_2100 += data[i].col1; 
						//-------
						rcp8CNT_2100 += 1;
						rcp8SUM_2100 += data[i].col2; 
					}
					else {
						rcp4CNT_2050 += 1;
						rcp4SUM_2050 += data[i].col1; 
						//-------
						rcp8CNT_2050 += 1;
						rcp8SUM_2050 += data[i].col2; 
					}
				 
				}
				else {
					curCNT += 1;
					curSUM += data[i].col1; 
					
				}
				
			}	
			//-------
			var curAVG  = (curSUM / curCNT);
			//-------			
			document.getElementById("lang_ndvi_val1").innerHTML= curAVG.toFixed(2);
			//-------
			var rcp4AVG_2050 = (rcp4SUM_2050 / rcp4CNT_2050);
			var rcp8AVG_2050 = (rcp8SUM_2050 / rcp8CNT_2050);
			var rcp4AVG_2100 = (rcp4SUM_2100 / rcp4CNT_2100);
			var rcp8AVG_2100 = (rcp8SUM_2100 / rcp8CNT_2100);
			//-------
			document.getElementById("lang_ndvi_rcp45_val2").innerHTML = rcp4AVG_2050.toFixed(2);
			document.getElementById("lang_ndvi_rcp85_val2").innerHTML = rcp8AVG_2050.toFixed(2);
			//-------
			document.getElementById("lang_ndvi_rcp45_val3").innerHTML = rcp4AVG_2100.toFixed(2);
			document.getElementById("lang_ndvi_rcp85_val3").innerHTML = rcp8AVG_2100.toFixed(2);
			//-------
			document.getElementById("ndvi_rcp45").style.display = "none";
			document.getElementById("ndvi_rcp85").style.display = "none";  
			//-------
			
			return data;
		});			
		
		var note = chart.tooltipContainer.createChild(am4core.Label);
		note.html = "<div style='background:white;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		note.fontSize = 14;
        note.valign = "bottom";		
			
}


function SetRCPscenariosChart() {

		
		DATA_URL = "./data/rcp_scenarios.csv";		
			
		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("rcp", am4charts.XYChart);


		// Add data

		chart.data = [{}];	
		chart.dateFormatter.dateFormat = "yyyy";

		// Create axes
		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.minGridDistance = 50;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.renderer.opposite = true;

		// Create series
		var series1 = chart.series.push(new am4charts.LineSeries());
		series1.dataFields.valueY = "col2";
		series1.dataFields.dateX = "col0";
		series1.strokeWidth = 1;
		series1.minBulletDistance = 10;
		series1.tooltipText = "[bold]{dateX}[/]\n[font-size: 20] {valueY}";
		series1.fillOpacity = 0.1;
		series1.tooltip.pointerOrientation = "vertical";
		series1.tooltip.background.cornerRadius = 20;
		series1.tooltip.background.fillOpacity = 0.5;
		series1.tooltip.label.padding(12, 12, 12, 12);
		series1.stroke = am4core.color("#0e62bd"); 
		series1.fill = am4core.color("#0e62bd"); 
			
		
		
		var seriesRange1A = dateAxis.createSeriesRange(series1);
		seriesRange1A.contents.strokeWidth = 1;
		seriesRange1A.contents.fillOpacity = 0.1;
		seriesRange1A.contents.stroke = am4core.color("#46a084"); 
		seriesRange1A.contents.fill = am4core.color("#46a084"); 


		var seriesRange1B = dateAxis.createSeriesRange(series1);
		seriesRange1B.contents.strokeWidth = 0;
		seriesRange1B.contents.fillOpacity = 0;
		

		// Create series
		var series2 = chart.series.push(new am4charts.LineSeries());
		series2.dataFields.valueY = "col1";
		series2.dataFields.dateX = "col0";
		series2.strokeWidth = 0;
		series2.minBulletDistance = 10;
		series2.tooltipText = "{valueY}";
		series2.fillOpacity = 0;
		series2.tooltip.pointerOrientation = "vertical";
		series2.tooltip.background.cornerRadius = 20;
		series2.tooltip.background.fillOpacity = 0.5;
		series2.tooltip.label.padding(12, 12, 12, 12)

		var seriesRange2 = dateAxis.createSeriesRange(series2);
		seriesRange2.contents.strokeWidth = 1;
		seriesRange2.contents.fillOpacity = 0.1;
		seriesRange2.contents.stroke = am4core.color("#dc3545"); 
		seriesRange2.contents.fill = am4core.color("#dc3545"); 
	
		
		//chart.cursor = new am4charts.XYCursor();
		//chart.cursor.lineY.opacity = 0;
		// Add scrollbar
		//chart.scrollbarX = new am4core.Scrollbar();

		
		var lastTime =  new Date(2100, 0, 0).getTime();

		var lTime = new Date(2098, 0, 0).getTime();
		var ldate = new Date(lTime);

		var sTime = new Date(2022, 0, 0).getTime();
		var sdate = new Date(sTime);



		var mTime = new Date(new Date().getFullYear().toString(), 0, 0).getTime();
		var qTime = mTime + ((lastTime - mTime) / 2);

		var mdate = new Date(mTime);
		var qdate = new Date(qTime);

		// add range
		var range = dateAxis.axisRanges.push(new am4charts.DateAxisDataItem());
		range.grid.stroke = chart.colors.getIndex(0);
		range.grid.strokeOpacity = 1;
		range.bullet = new am4core.ResizeButton();
		range.bullet.background.fill = chart.colors.getIndex(0);
		range.bullet.background.states.copyFrom(chart.zoomOutButton.background.states);

		range.bullet.adapter.add("minY", function(minY, target) {
			target.maxY = chart.plotContainer.maxHeight;
			target.maxX = chart.plotContainer.maxWidth;
			return chart.plotContainer.maxHeight;
		})

		range.bullet.events.on("dragged", function() {

			range.bullet.minX = dateAxis.valueToPoint(mTime).x;

			if (dateAxis.xToValue(range.bullet.pixelX) > mdate) { 
				range.value = dateAxis.xToValue(range.bullet.pixelX);
				
				if (range.value > ldate) {
					document.getElementById("rcp_rcp45").style.display = "block";
					document.getElementById("rcp_rcp85").style.display = "none";
				}
				else {
					
					if (range.value < sdate) {
						document.getElementById("rcp_rcp45").style.display = "none";
						document.getElementById("rcp_rcp85").style.display = "block";
					}
					else {
						document.getElementById("rcp_rcp45").style.display = "none";
						document.getElementById("rcp_rcp85").style.display = "none";
					}
				}
			}  
			else {
				range.value = mdate;
				
			}
			seriesRange1A.endValue  = range.value;
			seriesRange1B.value = range.value;
			seriesRange2.value = range.value;
  
		})

		range.date = qdate;


		seriesRange1A.date = mdate;
		seriesRange1A.endDate = qdate;

		seriesRange1B.date = qdate;
		seriesRange1B.endDate = new Date(2100, 0, 0);

		seriesRange2.date = qdate;
		seriesRange2.endDate = new Date(2100, 0, 0);
		
			
		chart.dataSource.url = DATA_URL;
		chart.dataSource.parser = new am4core.CSVParser();
		chart.dataSource.parser.options.numberFields = ["col"];
		chart.dataSource.adapter.add("parsedData", function(data) {
			
			document.getElementById("rcp_rcp45").style.display = "none";
			document.getElementById("rcp_rcp85").style.display = "none";
			//-------
			return data;
		});			
		
		var note = chart.tooltipContainer.createChild(am4core.Label);
		note.html = "<div style='background:white;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		note.fontSize = 14;
        note.valign = "bottom";		



}
	
	
	