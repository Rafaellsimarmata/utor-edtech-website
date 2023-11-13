INSERT INTO path (id_path, name_path,description)
VALUES 
('1','Kecerdasan Buatan','AI adalah Kecerdasan Buatan, seperti kepanjangan AI yaitu Artificial Intelligence, AI merupakan teknologi yang dirancang untuk membuat sistem komputer mampu meniru kemampuan intelektual manusia.'),
('2','Penalaran Umum','Tes penalaran umum sendiri merupakan sebuah tes untuk menguji kemampuan para siswa dalam memecahkan masalah baru yang belum pernah dihadapi sebelumnya dan menguji kemampuan bernalar secara abstrak yang tidak semata-mata merupakan hasil dari pembelajaran sebelumnya'),
('3','Matematika', 'ilmu yang mempelajari tentang besaran, struktur, bangun ruang, dan perubahan-perubahan yang pada suatu bilangan. ');


INSERT INTO topic (id_topic, id_path,judul)
VALUES 
('1','1', 'Intelligent Agent'),
('2', '1', 'Searching'),
('4','2', 'Fundamental to PU'),
('5', '2', 'Logika Matematika'),
('8', '2', 'Trigonometri'),
('9', '2', 'Logaritma');


INSERT INTO sub_topic (id_subtopic,id_topic,judul_subtopic,tipe)
VALUES 
('1','1', 'Type of IA','free'),
('2', '1', 'What is IA','free'),
('3', '1', 'Fundamental IA','free'),
('4','2', 'DFS','free'),
('5', '2', 'BFS','free'),
('6', '2', 'Djikstra Searching','free'),
('7','4', 'PU basic concept','free'),
('8', '4', 'tips trick PU','free'),
('10','5', 'Logika Kuantor','free'),
('11', '5', 'Implikasi','free'),
('12', '5', 'Biimplikasi','free'),
('13','8', 'SINUS','free'),
('14', '8', 'COSINUS','free'),
('15', '8', 'FTANGEN','free'),
('16','9', 'intro to Logaritma','free'),
('17', '9', 'Fungsi Logaritma','free'),
('18', '9', 'Pendalaman Logaritma','free');

ALTER TABLE path
ADD COLUMN peserta text,
ADD COLUMN peluang text,
ADD COLUMN levels text,
ADD COLUMN benefit text;



