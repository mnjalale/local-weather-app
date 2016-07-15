var isoCountries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

var cardinalDirections=[
    { "direction" : "N", "start" : 348.75, "end" : 11.24 },
    { "direction" : "NNE", "start" : 11.25, "end" : 33.74 },
    { "direction" : "NE", "start" : 33.75, "end" : 56.24 },
    { "direction" : "ENE", "start" : 56.25, "end" : 78.74 },
    { "direction" : "E", "start" : 78.75, "end" : 101.24 },
    { "direction" : "ESE", "start" : 101.25, "end" : 123.74 },
    { "direction" : "SE", "start" : 123.75, "end" : 146.24 },
    { "direction" : "SSE", "start" : 146.25, "end" : 168.74 },
    { "direction" : "S", "start" : 168.75, "end" : 191.24 },
    { "direction" : "SSW", "start" : 191.25, "end" : 213.74 },
    { "direction" : "SW", "start" : 213.75, "end" : 236.24 },
    { "direction" : "WSW", "start" : 236.25, "end" : 258.74 },
    { "direction" : "W", "start" : 258.75, "end" : 281.24 },
    { "direction" : "WNW", "start" : 281.25, "end" : 303.74 },
    { "direction" : "NW", "start" : 303.75, "end" : 326.24 },
    { "direction" : "NNW", "start" : 326.25, "end" : 348.74 }
];

$(document).ready(function(){
  var latitude = 0;
  var longitude = 0;
  var iconUrl ='';
  var countryCode = '';
  var country = '';
  var humidity = '';
  var region = '';
  var description = '';
  var tempKelvin = 0;
  var tempCelsius = 0;
  var tempFarenheit = 0;
  var windDeg = 0;
  var windSpeed = 0;
  var wind = '';
  var currentDate = moment().format('dddd h:mm a')

  $("#farenheitLink").on("click",function(){

    $("#temperature").html(tempFarenheit);
    toggleTemperature();

    return false;
  });

  $("#celsiusLink").on("click",function(){

    $("#temperature").html(tempCelsius);
    toggleTemperature();

    return false;
  });

  $.getJSON("http://api.snoopi.io/v1/",function(info){
    latitude = info.Latitude;
    longitude = info.Longitude;
    getWeatherDetails();

  });

  function getWeatherDetails(){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=3e92453ffcf5858bfd040accb9307de7",function(val){
      iconUrl = "http://openweathermap.org/img/w/" + val.weather[0].icon + ".png";
      countryCode = val.sys.country;
      country = getCountryName(countryCode);
      region = val.name;
      description = val.weather[0].description;
      description = description.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
      });
      tempKelvin = val.main.temp;
      tempCelsius = Number(tempKelvin - 273.15).toFixed(0);
      tempFarenheit = Number((tempCelsius * (9/5)) + 32).toFixed(0);
      humidity = "Humidity: " + val.main.humidity + "%";
      windDeg = val.wind.deg;
      windSpeed = val.wind.speed;
      wind = "Wind: " + getWindDirection(windDeg) + " " + windSpeed + " knots";

      $("#weatherIcon").prop("src",iconUrl);
      $("#temperature").html(tempCelsius);
      $("#humidity").html(humidity);
      $("#region").html(region + ", " +country);
      $("#description").html(description);
      $("#wind").html(wind);
      $("#currentDate").html(currentDate);
      toggleTemperature();
      changeBackgroundImage();
    });
  }

  function getCountryName(countryCode){
    if(isoCountries.hasOwnProperty(countryCode)){
      return isoCountries[countryCode];
    }else{
      return countryCode;
    }
  }

  function getWindDirection(degrees){
    var cardinalDirection = cardinalDirections.filter(function(val){
      return (degrees >= val.start && degrees <= val.end) || (degrees >= 348.75 || degrees <= 11.24 );
    });
    return cardinalDirection[0].direction;
  }

  function changeBackgroundImage(){
    var desc = description.toLowerCase();

    if(desc.indexOf("thunderstorm") != -1){
      $(".container-fluid").css('background-image','url("https://cdn.rawgit.com/mnjalale/MediaFiles/master/thunderstorm.jpg")');
    } else if(desc.indexOf("clouds")!=-1){
      $(".container-fluid").css('background-image','url("https://cdn.rawgit.com/mnjalale/MediaFiles/master/silverclouds.jpg")');
    } else if(desc.indexOf("rain")!=-1){
      $(".container-fluid").css('background-image','url("https://cdn.rawgit.com/mnjalale/MediaFiles/master/rain.jpg")');
    } else if(desc.indexOf("clear sky")!=-1){
      $(".container-fluid").css('background-image','url("https://cdn.rawgit.com/mnjalale/MediaFiles/master/clearsky.jpg")');
    } else if(desc.indexOf("snow")!=-1){
      $(".container-fluid").css('background-image','url("https://cdn.rawgit.com/mnjalale/MediaFiles/master/snow.jpeg")');
    }else if(desc.indexOf("mist")!=-1){
      $(".container-fluid").css('background-image','url("https://cdn.rawgit.com/mnjalale/MediaFiles/master/mist.jpg")');
    }
  }

  function toggleTemperature(){
    var activeTemperature = $("#temperature").html();
    if (activeTemperature==tempCelsius){
      $("#celsiusLink").addClass("inactive-link");
      $("#celsiusLink").click(function(e){
        e.preventDefault();
      });
      $("#farenheitLink").removeClass("inactive-link");
    }else if(activeTemperature==tempFarenheit){
      $("#farenheitLink").addClass("inactive-link");
      $("#farenheitLink").click(function(e){
        e.preventDefault();
      });
      $("#celsiusLink").removeClass("inactive-link");
    }

  }

});