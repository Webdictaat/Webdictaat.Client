import {Achievement} from "../models/achievement";
import {AchievementGroup} from "../models/AchievementGroup";

/*
 export var ACHIEVEMENTS: Achievement[] = [
 {id:1, name: 'FirstBlood', opdracht: 'hallo world', group: 'week 1', image: 'img'} ,
 {id:2, name: 'HalloWorld1', opdracht: 'hallo world', group: 'week 1', image: 'img' },
 {id:3, name: 'hallo world 2', opdracht: 'hallo world', group: 'week 2',  image: 'img' },
 {id:4, name: 'meep3', opdracht: 'hallo world', group: 'week 2', image: 'img' },
 {id:5, name: 'blaap', opdracht: 'hallo world', group: 'week 2', image: 'img' },
 {id:6, name: 'insert achievement name here', opdracht: 'hallo world', group: 'week 3', image: 'img' },
 {id:7, name: 'insert achievement', opdracht: 'hallo world', group: 'week 3', image: 'img' },
 ];
 */

var ach1 = {id:1, name: 'FirstBlood', trigger: 'hallo world', hidden: false, completed: true, image: 'img'};
var ach2 = {id:2, name: 'hallo world 1', trigger: 'hallo world', hidden: false, completed: false, image: 'img'};
var ach3 = {id:3, name: 'hallo world 2', trigger: 'hallo world', hidden: false, completed: false, image: 'img'};
var ach4 = {id:4, name: 'meep3', trigger: 'hallo world', hidden: true, completed: true, image: 'img'};
var ach5 = {id:5, name: 'blaap', trigger: 'hallo world', hidden: true, completed: false, image: 'img'};
var ach6 = {id:6, name: 'insert achievement name', trigger: 'hallo world', hidden: false, completed: true, image: 'img'};

export var ACHIEVEMENTS: AchievementGroup[] = [
    {id:1, name: 'week 1', order:1, Achievements: [
        ach1, ach2
    ]},
    {id:2, name: 'week 2', order:2, Achievements: [
        ach3, ach4
    ]},
    {id:3, name: 'week 3', order:3, Achievements: [
        ach5
    ]},
    {id:4, name: 'overig', order:4, Achievements: [
        ach6
    ]}
];