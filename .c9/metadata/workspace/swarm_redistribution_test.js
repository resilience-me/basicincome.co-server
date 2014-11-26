{"filter":false,"title":"swarm_redistribution_test.js","tooltip":"/swarm_redistribution_test.js","undoManager":{"mark":8,"position":8,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":230,"column":2},"action":"insert","lines":["exports.API = function(db, account_id, callback){","    ","","","","// ---------------------------- swarm-redistribution API ----------------------------------","","// coin-agnostic general purpuse API - connect any coin platform","// my swarm-redistribution API is the major component of project resilience","// and what I called peer-to-peer-dividend-protocols","// http://resilience.me and http://basicincome.co","","// the API can be used by any coin, money, thing, platform","","// first, get_collection() loads a nodes dividend pathways","// see video Systems-Architechture [2014], https://www.youtube.com/watch?v=PmPq3ywnnoI","","","","","// ---------------------------- swarm-redistribution ----------------------------------","","// FIRST, collect data from the coin platform",""," // this example connects with http://client.basicincome.co","","","var COLLECTION = db.collection(account_id);","    var taxRate","    var total_amount","","    ","    var currency","    var q = 0","","var get_dividend_lines = function(callback){","    get_wallet()","    function get_wallet(){","    COLLECTION.find({type:\"tax_blob\"}, function(err,doc){","        console.log(\"TEST\")","        console.log(doc)","        if(q<doc.length){","        total_amount = doc[q].total_amount","        currency = doc[q].currency;","","        ","        // get the taxRate","        COLLECTION.find({type: \"wallet\", currency: currency}, function(err,doc){","            console.log(doc)","        taxRate=doc.taxRate;","        get_dividend_pathway()","        })","        }","    });","    }","    ","    function get_dividend_pathway(){","  ","    console.log(\"scanning collection: \"+ COLLECTION);","    COLLECTION.find({type: \"dividend_pathway\", currency: currency},function(err, doc) {","    console.log(doc)","    callback(doc)","","    });","","}","","}","","        ","","","var get_collection = function() {","    //connect your coin here, this is how you connect to the API","    //the callback feeds collection/dividend-pathways","    //this example connects with http://client.basicincome.co","get_dividend_lines(swarm_redistribution)","}","","get_collection()        ","","","// -------------------------- STUFF:","// ALL THIS needs to be improved...","","    var lines = [];//lines.push(line)","   ","    ","    var x = 0;//recursion()","    var y = 0;//recursion()","   ","    var temp = \" \";","    ","    var taxRate_quota_temp = []","    var taxRate_quota_sum = 0","    var taxRate_switch = false","    var taxRate_x;","    var taxRate_ratio_x;","","","","","","// ---------------------- SWARM-REDISTRIBUTION ----------------------------","","function swarm_redistribution(pathway){","","console.log(pathway)","","// ------- First, construct fractal dividend lines -----------------","// see http://www.resilience.me/theory.html","",""," var w = 0;"," var line = []",""," if(pathway.length>0){","","    loop(pathway, line, w);// add taxRate ratios","    "," }"," else{"," console.log(\"collection is empty\")"," next_node()"," }","","    ","    ","    ","    function loop(pathway, line, w) {","    var q = 0","    // calculate taxRatio","    console.log(w)","    console.log(pathway[w])","    var taxRate_y = pathway[w].taxRate","    if(taxRate_switch === false){","     taxRate_x = taxRate","     taxRate_ratio_x = 1","    }","    else taxRate_x = taxRate","    if(taxRate_y > taxRate_x)taxRate_y = taxRate_x","    var taxRate_ratio_y = Number(taxRate_y) / Number(taxRate_x)","    var taxRate_quota = Number(taxRate_ratio_x) * Number(taxRate_ratio_y)","    console.log(temp.indexOf(pathway[w].account))","    ","    // push lines","    if (temp.indexOf(pathway[w].account) === -1){","    temp+= pathway[w].account + \" \"","    line.push({account: pathway[w].account, currency: currency, taxRate: taxRate, taxRate_quota: taxRate_quota});","    taxRate_quota_temp.push(taxRate_quota)","    taxRate_quota_sum = Number(taxRate_quota_sum) + Number(taxRate_quota)","    q++","    }","    else console.log(\"CIRCULAR\");","    ","    w++;","    ","    if (w<pathway.length){loop(pathway, w, line)}","    else {","        if (q>0){","            console.log(line);//lists all dividend pathways in IOUs[0] for ACCOUNT_ID","            lines.push(line)","        };","        ","        next_node()","    }","    }","","      ","// STEP 2: branch out (add all dividend pathways for lines[x][i].account)        ","","","    function next_node(){","            if(x<lines.length){","            console.log(\"recursion nr \"+x)","        if(y<lines[x].length){","            console.log(\"taxRate_quota:\" +lines[x][y].taxRate_quota)","            taxRate_ratio_x = Number(lines[x][y].taxRate_quota)","            taxRate_x = lines[x][y].taxRate","            COLLECTION = db.collection(lines[x][y].account);","            y++;","            get_collection();","        }","                ","        else {","           x++;","           y = 0;","            console.log(\"recursion nr \"+x)","            get_collection()","        }","        ","            }","            else console.log(lines), console.log(\"END\"), outgoing_payments()","        }","         ","             ","    // ------- SECOND, outgoing payments -----------------","    // see http://www.resilience.me/theory.html ","    function outgoing_payments(){","         var total_amount_pie = Number(total_amount)/taxRate_quota_sum","         ","         // create outgoing payment","         x = 0","         y = 0","         loop()","         function loop(){","            if (x<lines.length){     ","                if (y<lines[x].length){","                ","                var amount = Number(total_amount_pie * lines[x][y].taxRate_quota)","                var currency = lines[x][y].currency","                var account = lines[x][y].account","                var payment = {account: account, amount: amount, currency: currency}","                ","            callback(payment)","                y++","                loop()","                }","                else x++","                loop()","            }else q++, get_collection();","         }","}","   ","","        ","}//end swarm_redistribution()","","","","};"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":4},"action":"remove","lines":["exports.API = function(db, account_id, callback){","    "]}]}],[{"group":"doc","deltas":[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["","var mongojs = require(\"mongojs\")","var db = mongojs(\"mongodb://test:test@ds059907.mongolab.com:59907/awesome_box\");   ",""]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":0},"end":{"row":14,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1417035350054,"hash":"35ffa05cd212b5743285f7312b2204389150eca4"}