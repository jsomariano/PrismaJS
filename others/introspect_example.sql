
CREATE TABLE `employees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,        
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE `skills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


CREATE TABLE `employees_skills` (
    `people_id` INTEGER NOT NULL,
    `skill_id` INTEGER NOT NULL,

    UNIQUE INDEX `people_skill_index`(`people_id`, `skill_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;


ALTER TABLE `employees_skills` ADD FOREIGN KEY (`people_id`) REFERENCES `employees`(`id`);

ALTER TABLE `employees_skills` ADD FOREIGN KEY (`skill_id`) REFERENCES `skills`(`id`);


