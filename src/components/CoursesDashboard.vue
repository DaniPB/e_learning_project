<template>
    <h1>Cursos</h1>
    <div class="main-container">
        <div class="courses-container" v-for="course in courses" :key="course.name">
            <div class="courses-container__header">
                <div class="courses-container__logo">
                    <img :src="course.logo" />
                </div>
                <div class="courses-container__header-content">
                    <p class="courses-container__header-content-name">
                        {{ course.name }}
                    </p>
                    <p class="courses-container__header-content-level">
                        {{ course.level }}
                    </p>    
                </div>  
            </div>
            
            <img class="courses-container__image" :src="course.image"/>
            <p class="courses-container__description">
                {{ course.description }}
            </p>
            <div class="courses-container__footer">
                <p class="courses-container__footer-summary">RESUMEN</p>
                <p class="courses-container__footer-start">EMPEZAR</p>
            </div>
        </div>
    </div>
</template>

<script>
import CoursesResponse from '../mocks/courses_response.js'

export default {
    name: "CoursesDashboard",
    data: function() {
        return {
            courses: CoursesResponse.response()
        };
    }
}
</script>

<style scoped>
h1 {
    padding: 8% 8% 0;
    font-size: 56px;
    font-weight: normal;
    margin: 0;
}

.main-container {
    padding: 0 8%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50% 50%;
}

.courses-container {
    display: grid;
    width: 80%;
    height: 72%;
    grid-template-columns: 1fr;
    grid-template-rows: 15% 55% 15% 15%;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

}

.courses-container__logo {
    object-fit: contain;
    width: 40px;
    height: 40px;
}

.courses-container__logo img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.courses-container__header {
    display: flex;
    column-gap: 3%;
    padding: 2%;
    grid-row: 1/2;
}

.courses-container__description {
    overflow: hidden;
    height: 2.5rem;
    text-overflow: ellipsis;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    padding-left: 3%;
    grid-row: 3/4;
}

.courses-container__header-content {
    display: flex;
    flex-direction: column;
}

.courses-container__header-content p {
    margin: 0;
}

.courses-container__header-content-name {
    font-size: 16px;
    font-weight: bold;
}

.courses-container__header-content-level {
    font-size: 14px;
    color:  rgba(0, 0, 0, 0.87);
}

.courses-container__image {
    width: 100%;
    height: 100%;
    grid-row: 2/3;
}

.courses-container__footer {
    display: flex;
    font-size: 14px;
    color: #6200EE;
    column-gap: 4%;
    font-weight: bold;
    padding: 0 3% 6%;
    grid-row: 4/5;
}

@media (max-width: 480px) {
    h1 {
        font-size: 44px;
    }
}

@media (max-width: 640px) {

}

@media (max-width: 768px) {

}

@media (max-width: 1024px) {
}

@media (max-width: 1280px) {

}
</style>