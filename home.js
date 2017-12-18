(function() {

    'use strict';

    angular
        .module('home', [])
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl($scope, $rootScope, $timeout, $filter, ispErrorManager, ispServiceResponse, $http) {

        // donuts example
        $scope.donutData = {

            type: 'donut',
            
            total: {
                label: '',
                value: 207735.62
            },
            
            data: [{
                label: 'PRODOTTI MONETARI',
                value: 14.07,
                
                subdata: {
                    data: [{
                        label: 'PRODOTTI MONETARI EURO',
                        value: 14.07
                    }],
                    colors: []
                }
            
            }, {
                label: 'PRODOTTI OBBLIGAZIONARI',
                value: 42.35,
                
                subdata: {
                    data: [{
                        label: 'TITOLI DI STATO',
                        value: 20.09
                    }, {
                        label: 'OBB. DI TERZI',
                        value: 14.59
                    }, {
                        label: 'FONDI OBB. FLESSIBILI',
                        value: 7.67
                    }],
                    colors: []
                }
            
            }, {
                label: 'PRODOTTI MULTIASSET',
                value: 17.06,
                
                subdata: {
                    data: [{
                        label: 'FONDI BIL. BENCHMARK',
                        value: 9.94
                    }, {
                        label: 'CERTIFICATES',
                        value: 7.12
                    }],
                    colors: []
                }
            
            }, {
                label: 'PRODOTTI AZIONARI',
                value: 26.52,
                
                subdata: {
                    data: [{
                        label: 'AZIONI',
                        value: 26.52
                    }],
                    colors: []
                }
            }],
            colors: ['#A8DF00', '#FABE0A', '#B024F7', '#0096C8']
        };

        // header example
        $rootScope.nomeApplicativo = 'Nominativo Applicativo';
        
        $rootScope.identificazioneCliente = {
            title: 'nsg in perimetro',
            clienti: [{
                name: 'Mario Rossi',
                nsg: '38659947224',
                gestorePortafogliazione: 'Gianfranco Vespa',
                isSelect: true
            },
            {
                name: 'Simone Verdi',
                nsg: '38659947355',
                gestorePortafogliazione: 'Gianfranco Vespa',
                isSelect: false
            },
            {
                name: 'Mario Giallo, Pippo Blu',
                nsg: '43986742137',
                gestorePortafogliazione: 'Gianfranco Vespa',
                isSelect: false
            }]
        };

        $rootScope.headerIdentClienteFn = function() {
            console.log('Callback function');
        };

        $rootScope.pageOvertitle = 'Titolo Sezione';
        $rootScope.pageTitle = 'Titolo Pagina';
        $rootScope.pageSubtitle = 'Info pagina';

        $rootScope.headerPrevPageFn = function() {
            console.log('Call to header previous page button function');
        };

        $rootScope.showHeaderPrevPageBtn = true;

        // dropdown example
        $scope.dropdownItems = [{
            name: 'Italia',
            value: '0'
        }, {
            name: 'Germania',
            value: '1'
        }, {
            name: 'Francia',
            value: '2'
        }, {
            name: 'Finlandia',
            value: '3'
        }, {
            name: 'Spagna',
            value: '4'
        }, {
            name: 'Svizzera',
            value: '5'
        }];

        // combobox example
        $scope.comboDisabled = true;
        $scope.disableProvince = true;
        $scope.disableComuni = true;

        $scope.comboItems = [{
            name: 'Opzione 1',
            value: '0'
        }, {
            name: 'Opzione 2',
            value: '1'
        }, {
            name: 'Opzione 3',
            value: '2'
        }, {
            name: 'Testo molto lungo da visualizzare',
            value: '3'
        }, {
            name: 'Opzione 5',
            value: '4'
        }, {
            name: 'Opzione 6',
            value: '5'
        }, {
            name: 'Opzione 7',
            value: '6'
        }];

        $scope.comboAmounts = [
            1500.0,
            "500",
            "5000.0",
            "7500.0",
            "10000.0",
            "12500.0",
            "15000.0",
            "20000.0"
        ];

        $scope.paesi = [{
            name: 'Paese 1',
            value: '0'
        }, {
            name: 'Paese 2',
            value: '1'
        }, {
            name: 'Paese 3',
            value: '2'
        }, {
            name: 'Paese 4',
            value: '3'
        }, {
            name: 'Paese 5',
            value: '4'
        }, {
            name: 'Paese 6',
            value: '5'
        }, {
            name: 'Paese 7',
            value: '6'
        }];

        $scope.selectedDropdownItem = null;
        $scope.selectedComboItem = null;
        $scope.selectedComboAmount = null;
        $scope.selectedPaese = null;
        $scope.selectedProvincia = null;
        $scope.selectedComune = null;

        $scope.$watch('selectedPaese', function(newValue, oldValue) {

            if (!angular.equals(newValue, oldValue) && newValue) {

                $rootScope.loading = true;

                $scope.disableProvince = true;
                $scope.selectedProvincia = null;

                $scope.disableComuni = true;
                $scope.selectedComune = null;

                $timeout(function() {

                    $rootScope.loading = false;
                    $scope.disableProvince = false;

                    $scope.province = [{
                        name: 'Provincia 1',
                        value: '0'
                    }, {
                        name: 'Provincia 2',
                        value: '1'
                    }, {
                        name: 'Provincia 3',
                        value: '2'
                    }, {
                        name: 'Provincia 4',
                        value: '3'
                    }, {
                        name: 'Provincia 5',
                        value: '4'
                    }, {
                        name: 'Provincia 6',
                        value: '5'
                    }, {
                        name: 'Provincia 7',
                        value: '6'
                    }];

                }, 2000);
            }
        });

        $scope.$watch('selectedProvincia', function(newValue, oldValue) {

            if (!angular.equals(newValue, oldValue) && newValue) {

                $rootScope.loading = true;

                $scope.disableComuni = true;
                $scope.selectedComune = null;

                $timeout(function() {

                    $rootScope.loading = false;
                    $scope.disableComuni = false;

                    $scope.comuni = [{
                        name: 'Comune 1',
                        value: '0'
                    }, {
                        name: 'Comune 2',
                        value: '1'
                    }, {
                        name: 'Comune 3',
                        value: '2'
                    }, {
                        name: 'Comune 4',
                        value: '3'
                    }, {
                        name: 'Comune 5',
                        value: '4'
                    }, {
                        name: 'Comune 6',
                        value: '5'
                    }, {
                        name: 'Comune 7',
                        value: '6'
                    }];

                }, 2000);
            }
        });

        $scope.switchFields = function() {
            console.log($scope.selectedComboAmount);
        };

        // datepicker example
        $scope.date = null;

        $scope.onDateChange = function() {
            console.log($scope.date);
        };

        // input example
        $scope.obj = {
            text: 'Testo',
            password: '123456',
            importo: 1936.27
        };

        $scope.onInputFocus = function() {
            console.log("input focus");
        };

        $scope.onInputBlur = function() {
            console.log("input blur");
        };

        $scope.onInputChange = function() {
            console.log("input change");
        };

        // accordion example
        $scope.accordionContents = [{
            title: 'Titolo Accordion 1',
            content: 'content/accordion-content1.html',
            isGreen: true,
            innerContents: [{
                title: 'Titolo Accordion 1.1',
                content: 'content/accordion-content1.1.html',
                innerContents: [{
                    title: 'Titolo Accordion 1.1.1',
                    content: 'content/accordion-content.html',
                    inheritedScope: $scope
                }, {
                    title: 'Titolo Accordion 1.1.2',
                    content: 'content/accordion-content.html'
                }]
            }, {
                title: 'Titolo Accordion 1.2',
                content: 'content/accordion-content.html'
            }]
        }];

        // checkbox & radio example
        $scope.checkbox = false;
        $scope.checkbox_ = true;
        $scope.radio = null;
        $scope.radio_ = 3;

        // button example
        $scope.enableDisableCombo = function() {
            $scope.comboDisabled = !$scope.comboDisabled;
        };

        $scope.onButtonClick = function() {
            console.log("button clicked");
        };

        // error manager example
        $scope.genericErrorCallback = function(data) {
            console.log(data);
        };

        ispErrorManager.setGenericErrorCodes(['100', '200']);
        ispErrorManager.setSpecificErrorCodes(['300']);
        ispErrorManager.setGenericErrorCallback($scope.genericErrorCallback);

        $scope.validate = function() {

            /* MOCK (returned data from service) 
            var response = {
                esito: {
                    returnCode: '5',
                    messages: [{
                        code: 'dropdown-1',
                        type: '',
                        description: 'Il Paese selezionato non è corretto.'
                    }, {
                        code: 'combobox-1',
                        type: '',
                        description: 'L\'opzione selezionata non è corretta.'
                    }, {
                        code: 'date-1',
                        type: '',
                        description: 'La data inserita non è corretta.'
                    }, {
                        code: 'input-1',
                        type: '',
                        description: 'Il codice fiscale inserito non è corretto.'
                    }],
                    executionTime: 5498798765321,
                    statoEsito: false
                },
                payload: {}
            };
            /* END MOCK */

            //ispErrorManager.manageError(ispServiceResponse.initObject(response));

            //$rootScope.$broadcast('validationEvent');

            //$scope.obj.inputImporto = 200.58;

            console.log($scope.obj);
        };

        // loading example
        $rootScope.loading = false;

        $scope.loadingExample = function() {

            $rootScope.loading = true;

            $timeout(function() {
                $rootScope.loading = false;
            }, 2000);
        };

        // info modal example
        $scope.infoModalTitle = 'TITOLO MODALE INFORMATIVA';
        $scope.infoModalData = "Questa è una modale informativa.";
        $scope.infoModalOpened = false;

        $scope.openInfoModal = function() {
            $scope.infoModalOpened = true;
        };

        $scope.confirmModalFn = function() {
            console.log('Conferma');
        };

        // upload modal example
        $scope.uploadModalData = "Questa è una modale per il caricamento di un singolo documento.";
        $scope.uploadModalOpened = false;

        $scope.openUploadModal = function() {
            $scope.uploadModalOpened = true;
        };

        // upload modal multiple files example
        $scope.uploadModalMultiData = "Questa è una modale per il caricamento di più documenti.";
        $scope.uploadModalMultiOpened = false;

        $scope.openUploadModalMulti = function() {
            $scope.uploadModalMultiOpened = true;
        };

        $scope.uploadServiceUrl = 'https://angular-file-upload-cors-srv.appspot.com/upload';

        // esito modal example
        $scope.result = true;
        $scope.esitoModalTitle = 'La tua identità digitale è stata attivata con successo!';
        $scope.esitoModalData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet';
        $scope.esitoModalOpened = false;

        $scope.openEsitoModal = function() {
            $scope.esitoModalOpened = true;
        };

        // custom modal example
        $scope.customModalTitle = 'TITOLO MODALE CON TEMPLATE CUSTOM';
        $scope.customModalOpened = false;
        $scope.customModalTemplateData = {
            templateUrl: 'content/modal-content.html',
            inheritedScope: $scope
        };

        $scope.openCustomModal = function() {
            $scope.customModalOpened = true;
        };

        // switch example
        $scope.switchChoices = [{
            label: 'Cittadino Residente Italiano',
            icon: 'ico-ops-cittadinanzaitaliana'
        }, {
            label: 'Cittadino Residente Estero',
            icon: 'ico-ops-cittadinanzaestera'
        }];

        $scope.selectedSwitch = null;

        $scope.onSwitchSelection = function() {
            console.log($scope.selectedSwitch);
        };

        // tab example 
        $scope.tabs = [{
            name: 'Scheda 1',
            icon: '',
            content: 'content/tab-content-1.html',
            selected: true,
            disabled: false
        }, {
            name: 'Scheda 2',
            icon: 'ico-menu-lemiebanche',
            content: 'content/tab-content-2.html',
            selected: false,
            disabled: false
        }, {
            name: 'Scheda 3',
            icon: '',
            content: '',
            selected: false,
            disabled: true
        }];

        $scope.selectedTab = 'Scheda 2';

        $scope.selectTab = function(selected) {
            $scope.selectedTab = selected;
        };

        // results example
        $scope.resultsLabels = [
            'Campo 1',
            'Campo 2',
            'Campo 3',
            'Campo 4'
        ];

        $scope.results = [{
            'Campo 1': 'Contenuto 1.1',
            'Campo 2': 'Contenuto 1.2',
            'Campo 3': 'Contenuto 1.3',
            'Campo 4': 'Contenuto 1.4'
        }, {
            'Campo 1': 'Contenuto 2.1',
            'Campo 2': 'Contenuto 2.2',
            'Campo 3': 'Contenuto 2.3',
            'Campo 4': 'Contenuto 2.4'
        }, {
            'Campo 1': 'Contenuto 3.1',
            'Campo 2': 'Contenuto 3.2',
            'Campo 3': 'Contenuto 3.3',
            'Campo 4': 'Contenuto 3.4'
        }];

        $scope.selectedResult = null;
        $scope.selectedResults = [];

        $scope.onResultClick = function() {
            console.log($scope.selectedResult, $scope.selectedResults);
        };

        // table example
        $scope.tableLabels = [
            'NOME',
            'CODICE',
            'ZONA',
			'REGIONE',
			'CM',
			'PROVINCIA',
			'SIGLA',
			'Cod. Catastale',
			'CAP',
        ];

		$scope.comuni = [
		{
			"nome": "Abano Terme",
			"codice": "028001",
			"zona": "Nord-est",
			"regione": "Veneto",
			"cm": "asdasd",
			"provincia": "Padova",
			"sigla": "PD",
			"codiceCatastale": "A001",
			"cap": "35031"
		}
		];
		
		$http.get("/comuni.json").then(function(response){
			
			
			var arr = response.data;
			var new_array = arr.map(function callback(vecchioElemento) {
				var nuovoElemento = {};
				
				nuovoElemento.nome 		= vecchioElemento.nome;
				nuovoElemento.codice 	= vecchioElemento.codice;
				nuovoElemento.zona 		= vecchioElemento.zona.nome;
				nuovoElemento.regione 	= vecchioElemento.regione.nome;
				nuovoElemento.cm 		= vecchioElemento.cm.nome;
				nuovoElemento.provincia = vecchioElemento.provincia.nome;
				nuovoElemento.sigla 	= vecchioElemento.sigla;
				nuovoElemento.codiceCatastale = vecchioElemento.codiceCatastale;
				nuovoElemento.cap 		= vecchioElemento.cap[0];
				
				
				return nuovoElemento;
			});
			
			console.log("Vecchio Array:");
			console.log(response);
			
			console.log("Nuovo Array:");
			console.log(new_array);
			
			
			alert(response.data[0].nome);
			
			$scope.comuni = new_array;
			
		});
		
		
        $scope.tableContentsFE = [{
            'codice': 'A',
            'provincia': 'Torino',
            'numero': 12,
            'testo': 'Contenuto 1.4'
        }, {
            'codice': 'B',
            'provincia': 'Milano',
            'numero': 89,
            'testo': 'Contenuto 2.4',
            $highlighted: true
        }, {
            'codice': 'C',
            'provincia': 'Bari',
            'numero': 1235,
            'testo': 'Contenuto 3.4'
        }, {
            'codice': 'D',
            'provincia': 'Venezia',
            'numero': 0,
            'testo': 'Contenuto 4.4'
        }, {
            'codice': 'E',
            'provincia': 'Napoli',
            'numero': 14,
            'testo': 'Contenuto 5.4'
        }, {
            'codice': 'F',
            'provincia': 'Trento',
            'numero': 2,
            'testo': 'Contenuto 6.4'
        }, {
            'codice': 'G',
            'provincia': 'Roma',
            'numero': 1,
            'testo': 'Contenuto 7.4'
        }, {
            'codice': 'H',
            'provincia': 'Genova',
            'numero': 7,
            'testo': 'Contenuto 8.4'
        }, {
            'codice': 'I',
            'provincia': 'Catania',
            'numero': 1,
            'testo': 'Contenuto 9.4'
        }, {
            'codice': 'L',
            'provincia': 'Sassari',
            'numero': 5,
            'testo': 'Contenuto 10.4'
        }, {
            'codice': 'M',
            'provincia': 'Pesaro',
            'numero': 100,
            'testo': 'Contenuto 11.4'
        }];

        $scope.tableTotalContentsBE = [{
            'codice': 'A',
            'provincia': 'Torino',
            'numero': 12,
            'testo': 'Contenuto 1.4'
        }, {
            'codice': 'B',
            'provincia': 'Milano',
            'numero': 89,
            'testo': 'Contenuto 2.4'
        }, {
            'codice': 'C',
            'provincia': 'Bari',
            'numero': 1235,
            'testo': 'Contenuto 3.4'
        }, {
            'codice': 'D',
            'provincia': 'Venezia',
            'numero': 0,
            'testo': 'Contenuto 4.4'
        }, {
            'codice': 'E',
            'provincia': 'Napoli',
            'numero': 14,
            'testo': 'Contenuto 5.4'
        }, {
            'codice': 'F',
            'provincia': 'Trento',
            'numero': 2,
            'testo': 'Contenuto 6.4'
        }, {
            'codice': 'G',
            'provincia': 'Roma',
            'numero': 1,
            'testo': 'Contenuto 7.4'
        }, {
            'codice': 'H',
            'provincia': 'Genova',
            'numero': 7,
            'testo': 'Contenuto 8.4'
        }, {
            'codice': 'I',
            'provincia': 'Catania',
            'numero': 1,
            'testo': 'Contenuto 9.4'
        }, {
            'codice': 'L',
            'provincia': 'Sassari',
            'numero': 5,
            'testo': 'Contenuto 10.4'
        }, {
            'codice': 'M',
            'provincia': 'Pesaro',
            'numero': 100,
            'testo': 'Contenuto 11.4'
        }];

        $scope.cellStyle = [{
            textAlign: 'center',
            bold: true
        }, {
            textAlign: 'right',
            bold: true
        }, {
            textAlign: 'right',
            bold: false
        }, {
            textAlign: 'right',
            bold: false
        }];

        $scope.tableSorting = {
            label: 'provincia',
            reverse: false
        };

        $scope.tableCurrentPage = 0;
        $scope.tablePageLength = 3;

        $scope.tableTotalContentsBE = $filter("orderBy")($scope.tableTotalContentsBE, $scope.tableSorting.label, $scope.tableSorting.reverse);
        $scope.tableContentsBE = $scope.tableTotalContentsBE.slice($scope.tableCurrentPage * $scope.tablePageLength, $scope.tableCurrentPage * $scope.tablePageLength + $scope.tablePageLength);
		

        // BE table pagination example
        $scope.tableNavigationFn = function() {

            /* MOCK (BE pagination simulation) */
            $rootScope.loading = true;

            $timeout(function() {

                $rootScope.loading = false;
                $scope.tableTotalContentsBE = $filter("orderBy")($scope.tableTotalContentsBE, $scope.tableSorting.label, $scope.tableSorting.reverse);
                $scope.tableContentsBE = $scope.tableTotalContentsBE.slice($scope.tableCurrentPage * $scope.tablePageLength, $scope.tableCurrentPage * $scope.tablePageLength + $scope.tablePageLength);

            }, 2000);
            /* END MOCK */
        };

        $scope.tableContentsLength = 10;

        $scope.tableSelectedContent = null;
        $scope.tableSelectedContents = [];
        $scope.tableSelectedCell = null;

        $scope.tableSelectionFn = function() {
            console.log($scope.tableSelectedContent);
        };

        $scope.tableCellSelectionFn = function() {
            console.log($scope.tableSelectedCell);
        };
    }

})();
