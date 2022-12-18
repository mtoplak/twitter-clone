-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: ...
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `twitter`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id_comment` int(11) NOT NULL,
  `content` varchar(280) NOT NULL,
  `time_posted` datetime NOT NULL,
  `fk_id_user` int(11) NOT NULL,
  `fk_id_tweet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `like_tweet`
--

CREATE TABLE `like_tweet` (
  `id_like` int(11) NOT NULL,
  `fk_id_user` int(11) NOT NULL,
  `fk_id_tweet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `retweet`
--

CREATE TABLE `retweet` (
  `id_retweet` int(11) NOT NULL,
  `content` varchar(300) NOT NULL,
  `time_retweeted` datetime NOT NULL,
  `fk_id_user` int(11) NOT NULL,
  `fk_id_tweet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `tweet`
--

CREATE TABLE `tweet` (
  `id_tweet` int(11) NOT NULL,
  `content` varchar(300) NOT NULL,
  `time_posted` varchar(20) NOT NULL,
  `fk_id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `date_joined` date NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Table structure for table `user_follows_user`
--

CREATE TABLE `user_follows_user` (
  `id_follow` int(11) NOT NULL,
  `fk_id_follower` int(11) NOT NULL,
  `fk_id_following` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id_comment`),
  ADD KEY `fk_id_tweet` (`fk_id_tweet`),
  ADD KEY `fk_id_user` (`fk_id_user`);

--
-- Indexes for table `like_tweet`
--
ALTER TABLE `like_tweet`
  ADD PRIMARY KEY (`id_like`),
  ADD KEY `like_tweet_ibfk_2` (`fk_id_user`),
  ADD KEY `fk_id_tweet` (`fk_id_tweet`);

--
-- Indexes for table `retweet`
--
ALTER TABLE `retweet`
  ADD PRIMARY KEY (`id_retweet`),
  ADD KEY `retweet_ibfk_1` (`fk_id_tweet`),
  ADD KEY `retweet_ibfk_2` (`fk_id_user`);

--
-- Indexes for table `tweet`
--
ALTER TABLE `tweet`
  ADD PRIMARY KEY (`id_tweet`),
  ADD KEY `fk_id_user` (`fk_id_user`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_follows_user`
--
ALTER TABLE `user_follows_user`
  ADD PRIMARY KEY (`id_follow`),
  ADD KEY `user_follows_user_ibfk_1` (`fk_id_follower`),
  ADD KEY `user_follows_user_ibfk_2` (`fk_id_following`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id_comment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `like_tweet`
--
ALTER TABLE `like_tweet`
  MODIFY `id_like` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `retweet`
--
ALTER TABLE `retweet`
  MODIFY `id_retweet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tweet`
--
ALTER TABLE `tweet`
  MODIFY `id_tweet` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `user_follows_user`
--
ALTER TABLE `user_follows_user`
  MODIFY `id_follow` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`fk_id_tweet`) REFERENCES `tweet` (`id_tweet`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`fk_id_user`) REFERENCES `user` (`id_user`);

--
-- Constraints for table `like_tweet`
--
ALTER TABLE `like_tweet`
  ADD CONSTRAINT `like_tweet_ibfk_2` FOREIGN KEY (`fk_id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `like_tweet_ibfk_3` FOREIGN KEY (`fk_id_tweet`) REFERENCES `tweet` (`id_tweet`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `retweet`
--
ALTER TABLE `retweet`
  ADD CONSTRAINT `retweet_ibfk_1` FOREIGN KEY (`fk_id_tweet`) REFERENCES `tweet` (`id_tweet`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `retweet_ibfk_2` FOREIGN KEY (`fk_id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `tweet`
--
ALTER TABLE `tweet`
  ADD CONSTRAINT `tweet_ibfk_1` FOREIGN KEY (`fk_id_user`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `user_follows_user`
--
ALTER TABLE `user_follows_user`
  ADD CONSTRAINT `user_follows_user_ibfk_1` FOREIGN KEY (`fk_id_follower`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `user_follows_user_ibfk_2` FOREIGN KEY (`fk_id_following`) REFERENCES `user` (`id_user`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
