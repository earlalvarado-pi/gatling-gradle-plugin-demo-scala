var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1821",
        "ko": "8179"
    },
    "minResponseTime": {
        "total": "676",
        "ok": "1017",
        "ko": "676"
    },
    "maxResponseTime": {
        "total": "120005",
        "ok": "119945",
        "ko": "120005"
    },
    "meanResponseTime": {
        "total": "110022",
        "ok": "65338",
        "ko": "119971"
    },
    "standardDeviation": {
        "total": "25873",
        "ok": "34918",
        "ko": "1866"
    },
    "percentiles1": {
        "total": "120000",
        "ok": "70246",
        "ko": "120000"
    },
    "percentiles2": {
        "total": "120000",
        "ok": "95167",
        "ko": "120000"
    },
    "percentiles3": {
        "total": "120001",
        "ok": "114864",
        "ko": "120001"
    },
    "percentiles4": {
        "total": "120001",
        "ok": "118998",
        "ko": "120001"
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
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1817,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8179,
    "percentage": 82
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.455",
        "ok": "8.277",
        "ko": "37.177"
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
        "total": "10000",
        "ok": "1821",
        "ko": "8179"
    },
    "minResponseTime": {
        "total": "676",
        "ok": "1017",
        "ko": "676"
    },
    "maxResponseTime": {
        "total": "120005",
        "ok": "119945",
        "ko": "120005"
    },
    "meanResponseTime": {
        "total": "110022",
        "ok": "65338",
        "ko": "119971"
    },
    "standardDeviation": {
        "total": "25873",
        "ok": "34918",
        "ko": "1866"
    },
    "percentiles1": {
        "total": "120000",
        "ok": "70246",
        "ko": "120000"
    },
    "percentiles2": {
        "total": "120000",
        "ok": "95167",
        "ko": "120000"
    },
    "percentiles3": {
        "total": "120001",
        "ok": "114864",
        "ko": "120001"
    },
    "percentiles4": {
        "total": "120001",
        "ok": "118998",
        "ko": "120001"
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
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1817,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8179,
    "percentage": 82
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.455",
        "ok": "8.277",
        "ko": "37.177"
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
