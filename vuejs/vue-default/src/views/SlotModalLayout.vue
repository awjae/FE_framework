<!-- slot : 부모에서 slot 부분을 재정의가 가능 -->
<template>
    <div class="modal-container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main> 
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>