import React, { useState } from 'react';
import { IoMenuOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [expandedSections, setExpandedSections] = useState({
        course: false,
        activeCourses: false,
        document: false,
        hostel: false,
        complaint: false,
        profile: false
    });

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <>
            {!isOpen && 
                <>
                    <div className="p-2">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-transparent border-none text-2xl cursor-pointer mr-2">
                            <IoMenuOutline />
                        </button>
                    </div>
                </>
            }
            {isOpen && 
                <>
                    <div className="w-[250px] h-screen bg-gray-100 border-r-2 border-gray-300 p-2 font-sans">
                        <button onClick={() => setIsOpen(!isOpen)} className="bg-transparent border-none text-2xl cursor-pointer mr-2">
                            <IoMenuOutline />
                        </button>
                        <ul className="list-none pl-5 mt-5">
                            <li>
                                <span className="font-bold text-gray-800 cursor-pointer flex items-center" onClick={() => toggleSection('course')}>
                                    {expandedSections.course ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} Course
                                </span>
                                {expandedSections.course && (
                                    <ul className="pl-5">
                                        <li>Registration</li>
                                        <li>
                                            <span className="font-bold text-gray-800 cursor-pointer flex items-center" onClick={() => toggleSection('activeCourses')}>
                                                {expandedSections.activeCourses ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} Active Courses
                                            </span>
                                            {expandedSections.activeCourses && (
                                            <ul className="pl-5">
                                                <li>Assignment</li>
                                                <li>Attendance</li>
                                                <li>Drop Course</li>
                                                <li>Announcements</li>
                                                <li>Feedback</li>
                                            </ul>
                                            )}
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="mt-2">
                            <span className="font-bold text-gray-800 cursor-pointer flex items-center" onClick={() => toggleSection('document')}>
                                {expandedSections.document ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} Document
                            </span>
                            {expandedSections.document && (
                                <ul className="pl-5">
                                    <li>
                                        <Link to="/documents" className="text-gray-700 hover:text-gray-900">
                                            All Documents
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/documents/transcript" className="text-gray-700 hover:text-gray-900">
                                            Transcript
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/documents/idcard" className="text-gray-700 hover:text-gray-900">
                                            ID Card
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/documents/passport" className="text-gray-700 hover:text-gray-900">
                                            Passport
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/documents/bonafide" className="text-gray-700 hover:text-gray-900">
                                            Bonafide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/documents/feereceipt" className="text-gray-700 hover:text-gray-900">
                                            Fee Receipt
                                        </Link>
                                    </li>
                                </ul>
                            )}
                            </li>
                            <li className="mt-2">
                            <span className="font-bold text-gray-800 cursor-pointer flex items-center" onClick={() => toggleSection('hostel')}>
                                {expandedSections.hostel ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} Hostel
                            </span>
                            {expandedSections.hostel && (
                                <ul className="pl-5">
                                    <li>Leave</li>
                                    <li>Mess</li>
                                    <li>Hostel Transfer</li>
                                </ul>
                            )}
                            </li>
                            <li className="mt-2">
                            <span className="font-bold text-gray-800 cursor-pointer flex items-center" onClick={() => toggleSection('complaint')}>
                                {expandedSections.complaint ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} Complaint
                            </span>
                            {expandedSections.complaint && (
                                <ul className="pl-5">
                                    <li>Complaint Form</li>
                                </ul>
                            )}
                            </li>
                            <li className="mt-2">
                            <span className="font-bold text-gray-800 cursor-pointer flex items-center" onClick={() => toggleSection('profile')}>
                                {expandedSections.profile ? <IoMdArrowDropdown /> : <IoMdArrowDropright />} Profile
                            </span>
                            {expandedSections.profile && (
                                <ul className="pl-5">
                                    <li>View Profile</li>
                                </ul>
                            )}
                            </li>
                        </ul>
                    </div>
                </>
            }
        </>
    );
};

export default Sidebar;