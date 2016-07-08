-- phpMyAdmin SQL Dump
-- version 4.2.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-07-08 18:16:59
-- 服务器版本： 5.5.49-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `vivian`
--

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE IF NOT EXISTS `role` (
`Id` int(11) unsigned NOT NULL,
  `name` varchar(20) NOT NULL,
  `blood` int(11) unsigned NOT NULL DEFAULT '100',
  `honor` int(11) unsigned NOT NULL DEFAULT '0',
  `killed_times` int(11) unsigned NOT NULL DEFAULT '0',
  `negative_value` int(11) unsigned NOT NULL,
  `positive_value` int(11) unsigned NOT NULL,
  `o_time` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`Id`, `name`, `blood`, `honor`, `killed_times`, `negative_value`, `positive_value`, `o_time`) VALUES
(1, 'vivian', 100, 0, 0, 0, 0, 123123123);

-- --------------------------------------------------------

--
-- 表的结构 `role_behavior`
--

CREATE TABLE IF NOT EXISTS `role_behavior` (
`Id` int(11) unsigned NOT NULL,
  `role_id` int(11) NOT NULL,
  `behavior` text NOT NULL,
  `behavior_type` int(11) NOT NULL,
  `o_time` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `role_behavior`
--

INSERT INTO `role_behavior` (`Id`, `role_id`, `behavior`, `behavior_type`, `o_time`) VALUES
(1, 1, 'hello', 1, 1467972260),
(2, 1, 'how are you?', 1, 1467972527);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `role`
--
ALTER TABLE `role`
 ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `role_behavior`
--
ALTER TABLE `role_behavior`
 ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
MODIFY `Id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `role_behavior`
--
ALTER TABLE `role_behavior`
MODIFY `Id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
