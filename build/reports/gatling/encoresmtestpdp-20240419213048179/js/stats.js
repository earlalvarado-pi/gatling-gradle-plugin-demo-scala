var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "823",
        "ko": "177"
    },
    "minResponseTime": {
        "total": "261",
        "ok": "3270",
        "ko": "261"
    },
    "maxResponseTime": {
        "total": "240001",
        "ok": "239424",
        "ko": "240001"
    },
    "meanResponseTime": {
        "total": "140598",
        "ok": "120384",
        "ko": "234589"
    },
    "standardDeviation": {
        "total": "77436",
        "ok": "68593",
        "ko": "35587"
    },
    "percentiles1": {
        "total": "144469",
        "ok": "120869",
        "ko": "240000"
    },
    "percentiles2": {
        "total": "216606",
        "ok": "179617",
        "ko": "240000"
    },
    "percentiles3": {
        "total": "240000",
        "ok": "227637",
        "ko": "240001"
    },
    "percentiles4": {
        "total": "240001",
        "ok": "237373",
        "ko": "240001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 823,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 177,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.941",
        "ok": "2.421",
        "ko": "0.521"
    }
},
contents: {
"req_postrequest--996301393": {
        type: "REQUEST",
        name: "PostRequest",
path: "PostRequest",
pathFormatted: "req_postrequest--996301393",
stats: {
    "name": "PostRequest",
    "numberOfRequests": {
        "total": "1000",
        "ok": "823",
        "ko": "177"
    },
    "minResponseTime": {
        "total": "261",
        "ok": "3270",
        "ko": "261"
    },
    "maxResponseTime": {
        "total": "240001",
        "ok": "239424",
        "ko": "240001"
    },
    "meanResponseTime": {
        "total": "140598",
        "ok": "120384",
        "ko": "234589"
    },
    "standardDeviation": {
        "total": "77436",
        "ok": "68593",
        "ko": "35587"
    },
    "percentiles1": {
        "total": "144469",
        "ok": "120869",
        "ko": "240000"
    },
    "percentiles2": {
        "total": "216606",
        "ok": "179617",
        "ko": "240000"
    },
    "percentiles3": {
        "total": "240000",
        "ok": "227637",
        "ko": "240001"
    },
    "percentiles4": {
        "total": "240001",
        "ok": "237373",
        "ko": "240001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 823,
    "percentage": 82
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 177,
    "percentage": 18
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.941",
        "ok": "2.421",
        "ko": "0.521"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
