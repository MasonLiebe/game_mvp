/* 
    This file contains the data for all the buildings.
    Schema contains the following:
    id                      int         id for the building type
    upgrade_to_id          int         id for the building it upgrades to
    description            string      description for the building to be displayed
    tier                   int         tier of the building, (sticks and stones, etc.)
    name                   string      name of the building
    citizens               int         amount of civilians that live there
    vitality_add          double      add to in-turn vitality value
    civics_add            double      add to in-turn civics value
    enlightenment_add     double      add to in-turn enlightenment value
    defense_add           double      add to in-turn civics value
    industry_add          double      add to in-turn civics value
    civics_add            double      add to in-turn civics value
    vitality_mult         double      mult on in-turn vitality value
    civics_mult           double      mult on in-turn civics value
    enlightenment_mult    double      mult on in-turn enlightenment value
    defense_mult          double      mult on in-turn civics value
    industry_mult         double      mult on in-turn civics value
    civics_mult           double      mult on in-turn civics value
    divinity_add          double      add to in-turn divinity
    divinity_mult         double      mult on in-turn divinity
    event_script          function    function that runs when tile is scored
    base_cost             int         cost in divinity points
    sprite_file           string      location of the sprite file
*/

export const buildings = [
    /* 
    Primary Housing Buildings: 
        Huts, 
        Mud Brick Houses, 
        Timber Longhouses, 
        Row Houses, 
        Apartment Blocks, 
        Verical Arcologies
    */
    {
        id: 1,
        upgrade_to_id: 2,
        description: "Humble homes for cavemen to carry out ooga booga behaviors in.",
        tier: 1,
        name: "Huts",
        citizens: 5,
        vitality_add: 0,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 10,
        sprite_file: "huts.png"
    },
    {
        id: 2,
        upgrade_to_id: 3,
        description: "Mud brick houses for the more civilized",
        tier: 2,
        name: "Mud Brick Houses",
        citizens: 10,
        vitality_add: 0,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 50,
        sprite_file: "mud_brick_houses.png"
    },
    {
        id: 3,
        upgrade_to_id: 4,
        description: "Timber longhouses for the more civilized",
        tier: 3,
        name: "Timber Longhouses",
        citizens: 30,
        vitality_add: 0,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 300,
        sprite_file: "timber_longhouses.png"
    },
    {
        id: 4,
        upgrade_to_id: 5,
        description: "Row houses for the more civilized",
        tier: 4,
        name: "Row Houses",
        citizens: 150,
        vitality_add: 0,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 1000,
        sprite_file: "row_houses.png"
    },
    {
        id: 5,
        upgrade_to_id: 6,
        description: "Apartment blocks for the more civilized",
        tier: 5,
        name: "Apartment Blocks",
        citizens: 1000,
        vitality_add: 0,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 10000,
        sprite_file: "apartment_blocks.png"
    },
    {
        id: 6,
        upgrade_to_id: 7,
        description: "Vertical arcologies for the most civilized",
        tier: 6,
        name: "Vertical Arcologies",
        citizens: 15000,
        vitality_add: 0,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 100000,
        sprite_file: "vertical_arcologies.png"
    },

    /*
    Primary Vitality Buildings:
        Berry Patches,
        Irrigated Fields,
        Three-Field System,
        Plantation,
        AgriTech Greenhouses,
        Self-Sustaining Terrariums
    */
    {
        id: 7,
        upgrade_to_id: 8,
        description: "Berry patches for the more civilized",
        tier: 1,
        name: "Berry Patches",
        citizens: 0,
        vitality_add: 15,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 10,
        sprite_file: "berry_patches.png"
    },
    {
        id: 8,
        upgrade_to_id: 9,
        description: "Irrigated fields for the more civilized",
        tier: 2,
        name: "Irrigated Fields",
        citizens: 0,
        vitality_add: 35,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 50,
        sprite_file: "irrigated_fields.png"
    },
    {
        id: 9,
        upgrade_to_id: 10,
        description: "Three-field system for the more civilized",
        tier: 3,
        name: "Three-Field System",
        citizens: 0,
        vitality_add: 150,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 300,
        sprite_file: "three_field_system.png"
    },
    {
        id: 10,
        upgrade_to_id: 11,
        description: "Plantation for the more civilized",
        tier: 4,
        name: "Plantation",
        citizens: 0,
        vitality_add: 600,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 1000,
        sprite_file: "plantation.png"
    },
    {
        id: 11,
        upgrade_to_id: 12,
        description: "AgriTech greenhouses for the more civilized",
        tier: 5,
        name: "AgriTech Greenhouses",
        citizens: 0,
        vitality_add: 3000,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 10000,
        sprite_file: "agri_tech_greenhouses.png"
    },
    {
        id: 12,
        upgrade_to_id: 13,
        description: "Self-sustaining terrariums for the most civilized",
        tier: 6,
        name: "Self-Sustaining Terrariums",
        citizens: 0,
        vitality_add: 20000,
        civics_add: 0,
        enlightenment_add: 0,
        defense_add: 0,
        industry_add: 0,
        vitality_mult: 1,
        civics_mult: 1,
        enlightenment_mult: 1,
        defense_mult: 1,
        industry_mult: 1,
        divinity_add: 0,
        divinity_mult: 1,
        event_script: null,
        base_cost: 100000,
        sprite_file: "self_sustaining_terrariums.png"
    }

    /*
    Primary Civics Buildings:
        Elder's Firepit,
        Council Hall,
        Castle Keep,
        Parliament,
        New World Headquarters,
        Distributed Consensus Core
    */
    
]   