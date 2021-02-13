<template>
  <nav>
    <ul>
      <li>
        <router-link to="front" class="page-select"
          ><span>front</span>
          <img src="@/assets/icons/front-back.svg" alt="front card icon" />
        </router-link>
      </li>
      <li>
        <router-link to="inside-left" class="page-select"
          ><span>inside-left</span>
          <img
            src="@/assets/icons/inside-left.svg"
            alt="inside-left card icon"
          />
        </router-link>
      </li>
      <li>
        <router-link to="inside-right" class="page-select"
          ><span>inside-right</span>
          <img
            src="@/assets/icons/inside-right.svg"
            alt="inside-right card icon"
          />
        </router-link>
      </li>
      <li>
        <router-link to="back" class="page-select"
          ><span>back</span>
          <img src="@/assets/icons/front-back.svg" alt="back card icon" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>
