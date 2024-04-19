var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "2541",
        "ko": "2459"
    },
    "minResponseTime": {
        "total": "2015",
        "ok": "2015",
        "ko": "629389"
    },
    "maxResponseTime": {
        "total": "960006",
        "ok": "959778",
        "ko": "960006"
    },
    "meanResponseTime": {
        "total": "687937",
        "ok": "466999",
        "ko": "916243"
    },
    "standardDeviation": {
        "total": "306501",
        "ok": "273158",
        "ko": "106536"
    },
    "percentiles1": {
        "total": "793298",
        "ok": "462360",
        "ko": "960000"
    },
    "percentiles2": {
        "total": "960000",
        "ok": "693943",
        "ko": "960000"
    },
    "percentiles3": {
        "total": "960000",
        "ok": "907746",
        "ko": "960001"
    },
    "percentiles4": {
        "total": "960001",
        "ok": "949163",
        "ko": "960001"
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
    "count": 2541,
    "percentage": 51
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2459,
    "percentage": 49
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.717",
        "ok": "2.397",
        "ko": "2.32"
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
        "ok": "2541",
        "ko": "2459"
    },
    "minResponseTime": {
        "total": "2015",
        "ok": "2015",
        "ko": "629389"
    },
    "maxResponseTime": {
        "total": "960006",
        "ok": "959778",
        "ko": "960006"
    },
    "meanResponseTime": {
        "total": "687937",
        "ok": "466999",
        "ko": "916243"
    },
    "standardDeviation": {
        "total": "306501",
        "ok": "273158",
        "ko": "106536"
    },
    "percentiles1": {
        "total": "793298",
        "ok": "462355",
        "ko": "960000"
    },
    "percentiles2": {
        "total": "960000",
        "ok": "693771",
        "ko": "960000"
    },
    "percentiles3": {
        "total": "960000",
        "ok": "907746",
        "ko": "960001"
    },
    "percentiles4": {
        "total": "960001",
        "ok": "949163",
        "ko": "960001"
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
    "count": 2541,
    "percentage": 51
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 2459,
    "percentage": 49
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.717",
        "ok": "2.397",
        "ko": "2.32"
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
