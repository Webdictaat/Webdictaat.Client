import {Achievement} from "../models/achievement";
import {AchievementGroup} from "../models/AchievementGroup";

var ach1 = {id:1, name: 'FirstBlood', trigger: 'hallo world', hidden: false, completed: true, image: 'city achievement'};
var ach2 = {id:2, name: 'hallo world 1', trigger: 'hallo world', hidden: false, completed: false, image: 'tama achievement'};
var ach3 = {id:3, name: 'hallo world 2', trigger: 'hallo world', hidden: false, completed: false, image: 'city achievement'};
var ach4 = {id:4, name: 'meep3', trigger: 'hallo world', hidden: true, completed: true, image: 'tama achievement'};
var ach5 = {id:5, name: 'blaap', trigger: 'hallo world', hidden: true, completed: false, image: 'city achievement'};
var ach6 = {id:6, name: 'insert achievement name', trigger: 'hallo world', hidden: false, completed: true, image: 'tama achievement'};
var ach7 = {id:7, name: 'insert achievement name1', trigger: 'hallo world1', hidden: false, completed: true, image: 'tama achievement'};
var ach8 = {id:8, name: 'insert achievement name2', trigger: 'hallo world2', hidden: false, completed: true, image: 'city achievement'};
var ach9 = {id:9, name: 'insert achievement name3', trigger: 'hallo world3', hidden: false, completed: true, image: 'tama achievement'};

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
        ach6, ach7, ach8, ach9
    ]}
];