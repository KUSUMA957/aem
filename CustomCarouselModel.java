package com.training.project.core.models;

import java.util.Collections;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

@Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class CustomCarouselModel {

    @Inject
    private String sectionTitle;

    @Inject
    private String sectionDescription;

    @Inject
    private String exploreButtonText;

    @Inject
    private String exploreButtonLink;

    @ChildResource
    private List<Slide> slides;

    public String getSectionTitle() {
        return sectionTitle;
    }

    public String getSectionDescription() {
        return sectionDescription;
    }

    public String getExploreButtonText() {
        return exploreButtonText;
    }

    public String getExploreButtonLink() {
        return exploreButtonLink;
    }

    public List<Slide> getSlides() {
        return slides != null ? slides : Collections.emptyList();
    }
}