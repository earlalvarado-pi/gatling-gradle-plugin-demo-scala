var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "1353",
        "ko": "3647"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "3395",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "20602",
        "ok": "20602",
        "ko": "32"
    },
    "meanResponseTime": {
        "total": "4504",
        "ok": "16618",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "7629",
        "ok": "3725",
        "ko": "2"
    },
    "percentiles1": {
        "total": "10",
        "ok": "18184",
        "ko": "9"
    },
    "percentiles2": {
        "total": "9217",
        "ok": "18439",
        "ko": "10"
    },
    "percentiles3": {
        "total": "18610",
        "ok": "19406",
        "ko": "13"
    },
    "percentiles4": {
        "total": "19461",
        "ok": "20254",
        "ko": "19"
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
    "count": 1353,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3647,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.373",
        "ok": "11.466",
        "ko": "30.907"
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
        "total": "5000",
        "ok": "1353",
        "ko": "3647"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "3395",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "20602",
        "ok": "20602",
        "ko": "32"
    },
    "meanResponseTime": {
        "total": "4504",
        "ok": "16618",
        "ko": "10"
    },
    "standardDeviation": {
        "total": "7629",
        "ok": "3725",
        "ko": "2"
    },
    "percentiles1": {
        "total": "10",
        "ok": "18184",
        "ko": "9"
    },
    "percentiles2": {
        "total": "9217",
        "ok": "18439",
        "ko": "10"
    },
    "percentiles3": {
        "total": "18610",
        "ok": "19406",
        "ko": "13"
    },
    "percentiles4": {
        "total": "19461",
        "ok": "20254",
        "ko": "19"
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
    "count": 1353,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3647,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "42.373",
        "ok": "11.466",
        "ko": "30.907"
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
