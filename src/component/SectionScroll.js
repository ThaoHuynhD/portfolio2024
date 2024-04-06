import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_TITLE } from "../constant/constant";
import { headerTitle } from "../data/data";
import { useEffect } from "react";

function debounce(func, delay) {
    let timeoutId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

function onScroll(activeTitle, dispatch, sections) {
    return function (e) {
        let index = headerTitle.findIndex(item => item.link === activeTitle);

        e = e || window.event;
        var delta = e.detail ? -e.detail : e.wheelDelta;

        if (delta > 0) {
            if (index > 0) {
                index--;
                dispatch({ type: SET_ACTIVE_TITLE, payload: headerTitle[index].link });

                sections.forEach((section) => {
                    section.classList.remove('animate__fadeInUp');
                    section.classList.add('animate__fadeInDown');
                })
            }
        }
        else if (index < (headerTitle.length - 1)) {
            index++;
            dispatch({ type: SET_ACTIVE_TITLE, payload: headerTitle[index].link });

            sections.forEach((section) => {
                section.classList.remove('animate__fadeInDown');
                section.classList.add('animate__fadeInUp');
            })
        }

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    };
}

function scrollToSection(sectionId) {

    const section = document.querySelector(sectionId);
    section.classList.add('active');
    console.log("section: ", section);

    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

const useScrollEffect = () => {
    let activeTitle = useSelector(state => state.menuReducer.activeTitle);

    const dispatch = useDispatch();

    const sections = document.querySelectorAll('section');
    const container = document.querySelector('#myBody');


    useEffect(() => {

        sections.forEach((section) => {
            section.classList.add('animate__animated');
            section.classList.remove('active');
        })

        scrollToSection(activeTitle, sections);
        const handleScroll = debounce(onScroll(activeTitle, dispatch, sections), 200);
        container.addEventListener('wheel', handleScroll);

        return () => {
            container.removeEventListener('wheel', handleScroll);
        };
    }, [activeTitle]);

}

export default useScrollEffect;